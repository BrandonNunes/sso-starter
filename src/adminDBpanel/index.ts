
import bcrypt from "bcrypt";
import { translations } from "./translations";
// import { componentLoader, Components } from "./components";
import session from "express-session";
// import {User} from "../app/users/entities/user.entity";
// import { UsersService } from "../app/users/users.service";
// import {Client} from "../app/clients/entities/client.entity";

const locale: any = {
  language: "pt",
  translations: translations,
};

const adminJsConfig: any = {
  resources: [
    {
     // resource: User,
      options: {
        properties: {
          isAdmin: {
            isRequired: true,
            availableValues: [
              /*  {value: 0, label: 'Representante'}, */
              { value: 1, label: "Admin da Plataforma" },
              { value: 2, label: "Admin do Core" },
            ],
          },
          defRegional: {
            isVisible: { edit: false, list: false, show: false },
          },
          is_regional_changable: {
            isVisible: { edit: false, list: false, show: false },
          },
          createdAt: {
            isVisible: { edit: false, list: false, show: false },
          },
          updatedAt: {
            isVisible: { edit: false, list: false, show: false },
          },
          core: {
            isRequired: true,
          //  availableValues: ufs,
          },
          registro: {
            isVisible: false,
          },
          senha: {
            isVisible: { isVisible: false }, //{  edit: true, list: false, show: false }
          },
          ass_id: {
            isVisible: { isVisible: false }, //{  edit: true, list: false, show: false }
          },
          password: {
            isRequired: true,
            type: "password",
            isVisible: {
              list: false,
              edit: true,
              filter: false,
              show: false,
            },
          },
        },
        actions: {
          new: {
            before: async (request: any) => {
              if (request.payload.password) {
                request.payload = {
                  ...request.payload,
                  senha: await bcrypt.hash(request.payload.password, 12),
                  password: undefined,
                };
              }
              return request;
            },
          },
          edit: {
            before: async (request: any) => {
              if (request.payload.password) {
                request.payload = {
                  ...request.payload,
                  senha: await bcrypt.hash(request.payload.password, 12),
                  password: undefined,
                };
              }
              return request;
            },
          },
          list: {
            before: async (request: any, context: any) => {
              const { currentAdmin } = context;
              return {
                ...request,
                query: {
                  ...request.query,
                  "filters.isAdmin": 2,
                },
              };
            },
          },
        },
      },
    },
    {
     // resource: Client,
      options: {
        properties: {
          createdAt: {
            isVisible: { edit: false, list: false, show: false },
          },
          updatedAt: {
            isVisible: { edit: false, list: false, show: false },
          },
          logo: {
            isVisible: false,
          },
          initial_text: {
            isVisible: false,
          },
          appId: {
            isVisible: { edit: true, list: false, show: true },
          },
          appSecret: {
            isVisible: { edit: true, list: false, show: true },
          },
          ip_api: {
            isRequired: true,
            props: {
              placeholder: "https://999.999.999:0000/api/v1",
            },
          },
          // descricao: {
          //   availableValues: ufs,
          // },
        },
      },
    },
    // {
    //   resource: Documentos,
    //   options: { navigation: false },
    // },
  ],
  // componentLoader,
  rootPath: "/admin",
  locale,
  branding: {
    companyName: "Painel Administrativo CONFERE",
    // softwareBrothers: false,
    withMadeWithLove: false,
    logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDp9IDG4Z0jLH0SAcRI1zjTGRdm_4T41N_Qw&usqp=CAU" ||
      "",
  },
  // dashboard: {
  //   component: Components.MyDashboard,
  // },
};
// adminJs.watch()
// const routerAdmin = AdminJSExpress.buildAuthenticatedRouter(
//   adminJs,
//   {
//     cookieName: "adminjs",
//     cookiePassword: "adminjs",
//     maxRetries: 5,
//     authenticate: async (email: string, password: string) => {
//       const userService = new UsersService(User)
//       try {
//         const verifyUser: any = await userService.findOneByEmail(email);
//         if (verifyUser.length === 0) return null;
//         const senha = await bcrypt.compare(password, verifyUser[0].senha);
//         const ADMIN = {
//           email: email,
//           password: senha,
//         };
//         if (email === ADMIN.email && senha && verifyUser[0].isAdmin == 1) {
//           return ADMIN;
//         }
//         return null;
//       } catch (error) {
//         console.log(error);
//         return null;
//       }
//     },
//   },
//   null,
//
// );
 export default adminJsConfig
