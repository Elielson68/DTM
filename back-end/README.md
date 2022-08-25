# Instalação do backend.

## 1. Instalar o SDK

Entre no link abaixo e baixe o .NET 5.0 SDK:

https://dotnet.microsoft.com/download

Após baixar, instale e reinicie o computador.

Ao iniciar o computador, abra o terminal e digite

    dotnet --version

Caso apareça algo significa que foi instalado com sucesso.

## 2. Clonar o projeto e instalar pacotes

Após clonar o projeto, abra o terminal na pasta back-end e rode o comando

    dotnet restore DTMBackend.csproj

Com isso o projeto instalará os pacotes necessários.

## 3. Iniciar o server

Agora para iniciar o server basta rodar

    dotnet run

e o server iniciará em 2 portas: 5000 e 5001, basta abrir em qualquer uma para utilizar.

http://localhost:5000

## 4. Crie um banco postgreSQL no docker

ATENÇÃO: durante a criação do banco, atente de deixar o nome do banco como postgres e a senha como postgres.

Para a criação do banco basta utilizar o tutorial abaixo:

https://felixgilioli.medium.com/como-rodar-um-banco-de-dados-postgres-com-docker-6aecf67995e1

## 5. Criando tabelas

No terminal digite o comando:

    dotnet ef migrations add InitialCreate

Para criar o migrations e então execute o comando:
    
    dotnet ef database update InitialCreate

Para atualizar o banco no docker.


## 6. Possíveis problemas nos pacotes

Caso ocorra qualquer erro durante a execução do comando dotnet run e o erro seja referente aos pacotes, basta seguir os passos do link abaixo:

https://stackoverflow.com/questions/68283730/error-nu1100-unable-to-resolve-microsoftofficecore-15-0-0-for-net5-0

O que o link diz é:

Rode o comando abaixo no terminal na pasta back-end:

    dotnet nuget locals all --clear

Em seguida rode:

    dotnet restore DTMBackend.csproj

Caso o erro persista, vá até C:\Users\<username>\AppData\Roaming\NuGet e exclua o arquivo NuGet.config, e logo em seguida rode o comando abaixo na pasta back-end

    dotnet restore DTMBackend.csproj
