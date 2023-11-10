import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { DominioModule } from './app/dominio/dominio.module';
import {DominioModel} from "./app/dominio/entities/dominio.entity";
import { AppClienteModule } from './app/aplicacao/aplicacao.module';
import {AplicacaoModel} from "./app/aplicacao/entities/aplicacao.entity";
import { GrupoModule } from './app/grupo/grupo.module';
import { PermissoesModule } from './app/permissoes/permissoes.module';
import {GrupoModel} from "./app/grupo/entities/grupo.entity";
import {PermissaoModel} from "./app/permissoes/entities/permissoes.entity";
import { GrupoPermModule } from './app/grupo-perm/grupo-perm.module';
import {GrupoPermModel} from "./app/grupo-perm/entities/grupo-perm.entity";
import {translations} from "./adminDBpanel/translations";
import { UsuariosModule } from './app/usuarios/usuarios.module';
import {UsuarioModel} from "./app/usuarios/entities/usuario.entity";
import { GrupoUsuarioModule } from './app/grupo-usuario/grupo-usuario.module';
import { UsuarioPermissaoModule } from './app/usuario-permissao/usuario-permissao.module';
import { AplicacaoUsuarioModule } from './app/aplicacao-usuario/aplicacao-usuario.module';
import {AplicacaoUsuarioModel} from "./app/aplicacao-usuario/entities/aplicacao-usuario.entity";
import { GrupoUsuarioModel } from './app/grupo-usuario/entities/grupo-usuario.entity';
import { UsuarioPermissaoModel } from './app/usuario-permissao/entities/usuario-permissao.entity';
import { LicencaModule } from './app/licenca/licenca.module';
import {LicencaModel} from "./app/licenca/entities/licenca.entity";

const DEFAULT_ADMIN = {
  email: 'admin@admin',
  password: 'admin',
}
const authenticate = async (email: string, password: string) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return Promise.resolve(DEFAULT_ADMIN)
  }
  return null
}
// @ts-ignore
@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      host: './dev.sqlite',
      // port: 3306,
      // username: 'root',
      // password: 'root',
      database: 'dev',
      models: [DominioModel, AplicacaoModel, GrupoModel, PermissaoModel, GrupoPermModel, UsuarioModel, AplicacaoUsuarioModel, GrupoUsuarioModel, UsuarioPermissaoModel, LicencaModel],
      synchronize: true,
      autoLoadModels: true
    }),
    import('@adminjs/nestjs').then(async ({ AdminModule }) => {
      const {AdminJS} = await import('adminjs');
      const {Resource, Database} = await import('@adminjs/sequelize')
      await AdminJS.registerAdapter({Resource, Database})
      return AdminModule.createAdminAsync({
        useFactory: () => ({
          adminJsOptions: {
            rootPath: '/admin',
            resources: [
              {
                resource: DominioModel,
                options: {
                  properties: {
                    descricao: {
                      description: "Domínio onde ao qual a aplicação fará parte",
                      isTitle: true
                    }
                  }
                }

              },
              {
                resource: AplicacaoModel,
                options: {
                  properties: {
                    'dominioId': {
                      description: "Domínio onde ao qual a aplicação fará parte",
                    },
                    nomeApp: {
                      isTitle: true
                    }
                  }
                }

            },
              {
                resource: GrupoModel,
                options: {
                  properties: {
                    descricao: {
                      isTitle: true
                    }
                  }
                }

              },
              {
                resource: PermissaoModel,
                options: {
                  properties: {
                    permissao: {
                      isTitle: true
                    }
                  }
                }

              },
              GrupoPermModel,
              {
                resource: UsuarioModel,
                options: {
                  properties: {
                    nome: {
                      isTitle: true
                    }
                  }
                }
              },
              {
                resource: LicencaModel,
                options: {
                  properties: {
                    descricao: {
                      isTitle: true
                    }
                  }
                }

              }, AplicacaoUsuarioModel, GrupoUsuarioModel, UsuarioPermissaoModel],
            branding: {
              companyName: 'Area administrativa ',
              logo: "",
              withMadeWithLove: false,
            },
            locale: {
              language: 'pt',
              availableLanguages: ['pt'],
              localeDetection: true,
              translations
            }
          },
          auth: {
            authenticate,
            cookieName: 'adminjs',
            cookiePassword: 'secret'
          },
          sessionOptions: {
            resave: true,
            saveUninitialized: true,
            secret: 'secret'
          },
        }),
      })
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
      exclude: ['api/*', 'admin/*']
    }),
    DominioModule,
    AppClienteModule,
    GrupoModule,
    PermissoesModule,
    GrupoPermModule,
    UsuariosModule,
    GrupoUsuarioModule,
    UsuarioPermissaoModule,
    AplicacaoUsuarioModule,
    LicencaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
// @ts-ignore
export class AppModule {}