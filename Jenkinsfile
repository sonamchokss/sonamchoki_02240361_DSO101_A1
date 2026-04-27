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
                dir('todo-app/backend') {
                    bat 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                dir('todo-app/backend') {
                    bat 'npm run build || echo "No build script, skipping"'
                }
            }
        }

        stage('Test') {
            steps {
                dir('todo-app/backend') {
                    bat 'npm test'
                }
            }
            post {
                always {
                    junit '**/junit.xml'
                }
            }
        }

        stage('Deploy') {
            steps {
                dir('todo-app/backend') {
                    bat 'docker build -t sonamchokss/node-app:latest .'
                    bat 'docker push sonamchokss/node-app:latest'
                }
            }
        }
    }
}