pipeline {
    agent any
    tools {
        nodejs 'NodeJS'
    }
    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/sonamchokss/sonamchoki_02240361_DSO101_A1'
            }
        }

        stage('Install') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
            post {
                always {
                    junit 'junit.xml'
                }
            }
        }

        stage('Deploy') {
            steps {
                bat 'docker build -t sonamchokss/node-app:latest .'
                bat 'docker push sonamchokss/node-app:latest'
            }
        }
    }
}