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
        sh 'yarn lint:ci'
      }
    }
  }

  post {
    always {
      echo 'This will always run'
      slackSend channel: '#teldrassil',
                color: 'good',
                message: "The pipeline ${currentBuild.fullDisplayName} completed."
    }
    success {
      echo 'This will run only if successful'
    }
    failure {
      echo 'This will run only if failed'
      slackSend channel: '#teldrassil',
                color: 'bad',
                message: "${currentBuild.fullDisplayName} *FAILED*."
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
