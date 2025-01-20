pipeline {
    agent any
    tools {
        nodejs 'nodejs' // Use the name you configured in Global Tool Configuration
    }
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
    }
}
