pipeline {
    agent {
        docker {
            image 'node:18' // Specify the desired Node.js version
        }
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
