pipeline {
  agent { docker { image 'node' } }
  // agent { dockerfile true }
  environment {
    CI='true'
  }
  stages {
    stage('Build') {
      steps {
        echo 'NODE: $(node -v) ---- YARN: $(yarn -v) ---- NPM: $(npm -v)'
        sh 'yarn install --force --pure-lock'
      }
    }
    stage('Test') {
      steps {
        sh 'yarn test'
      }
    }
  }

  post {
    always {
      echo 'This will always run'
      slackSend channel: '#emerald-dream',
                color: 'good',
                message: "The pipeline ${currentBuild.fullDisplayName} completed successfully."
    }
    success {
      echo 'This will run only if successful'
    }
    failure {
      echo 'This will run only if failed'
    }
    unstable {
      echo 'This will run only if the run was marked as unstable'
    }
    changed {
      echo 'This will run only if the state of the Pipeline has changed'
      echo 'For example, if the Pipeline was previously failing but is now successful'
    }
  }
}
