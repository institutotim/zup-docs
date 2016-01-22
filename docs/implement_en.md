ZUP offers useful functionalities for different types of institutions – public and private – and, due to the platform flexibility, it allows diverse sectors of these institutions to be benefited with the organizing tools and the visibility brought by its usage. We list here the required steps for putting the system into production, either with all features enabled, or only part of them.

## Essential components
Independently of what applications are selected for use by the organization, two components are always necessary to operate the system: the API and the Administrative Panel. The API, also known as backend, is responsible for storing and routing information and implements the business logic of the different modules of the system through an interface exposed via HTTP. This component must run in a server accessible to the Administrative Panel and to all other chosen applications, independently if a public internet or a private network is being used.
The Painel Administrativo panel is the main tool for handling and use of the system and it has access to all other functionalities available in the platform. If your organizations needs to use the backoffice application in notebooks or desktops, the installation and configuration of these two components is all you need.

 - [Install and configure the platform with the guide available in this site](installation_docker.md).
 - [Understand and configure groups of users and permissions with the documentation available in the knowledge base](https://zeladoriaurbana.zendesk.com/hc/pt-br/articles/203948149-Criando-um-grupo-e-atribuindo-permiss%C3%B5es).
 - Create [report categories](https://zeladoriaurbana.zendesk.com/hc/pt-br/articles/203925815-Criando-a-categoria-de-relato) and [inventory categories](https://zeladoriaurbana.zendesk.com/hc/pt-br/articles/203925215-O-que-%C3%A9-uma-categoria-de-invent%C3%A1rio-).
 - [Get to know the other functionalities the system offers and that may be useful for your organization](https://zeladoriaurbana.zendesk.com/hc/pt-br).

## Field usage
ZUP Técnico allows field agents to interact with the system in a way almost as wide as the Painel Administrativo panel. Functionalities that deal with creation and configuration of inventory categories, reports, report visualization and other administrative tools are not available in the application. However, creation, edition and consumption of items already configured in the system may be used, even without an internet connection (for report and inventory items) – which makes it the ideal application for use in fiscalization, inspection and other ways of fieldwork.

 - [Download, configure e distribute the technical application following the instructions in the component's repository.](https://github.com/LaFabbrica/zup-android-tecnico)

## External users and mobile applications
Finally, the system also counts with mobile applications devised to allow the consumption of information about inventory items, the management of personal reports and the consumption of public information about third-part reports for users that might not belong to the organization. These applications were developed for smartphones and have actors that will make casual use of the system as its main target.
   
  - [Download, configure and distribute the iOS application following the instructions in the component's repository](https://github.com/LaFabbrica/zup-ios-cidadao)
  - [Download, configure and distribute the Android application following the instructions in the component's repository.](https://github.com/LaFabbrica/zup-android-cidadao)