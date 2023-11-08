import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { DominioModule } from './app/dominio/dominio.module';
import {DominioModel} from "./app/dominio/entities/dominio.entity";
import { AppClienteModule } from './app/app_cliente/app_cliente.module';
import {AppClienteModel} from "./app/app_cliente/entities/app_cliente.entity";
import { GrupoModule } from './app/grupo/grupo.module';
import { PermissoesModule } from './app/permissoes/permissoes.module';
import {GrupoModel} from "./app/grupo/entities/grupo.entity";
import {PermissaoModel} from "./app/permissoes/entities/permissoes.entity";
import { GrupoPermModule } from './app/grupo-perm/grupo-perm.module';
import {GrupoPermModel} from "./app/grupo-perm/entities/grupo-perm.entity";

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
      models: [DominioModel, AppClienteModel, GrupoModel, PermissaoModel, GrupoPermModel],
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
            resources: [DominioModel,
              {
                resource: AppClienteModel,
                options: {
                  properties: {
                    // 'dominioId': {
                    //   description: "Domínio onde ao qaul a palicação fará parte",
                    //   propertyKey: 'descricao'
                    //}
                  }
                }

            }, GrupoModel, PermissaoModel, GrupoPermModel],
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
    DominioModule,
    AppClienteModule,
    GrupoModule,
    PermissoesModule,
    GrupoPermModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
// @ts-ignore
export class AppModule {}