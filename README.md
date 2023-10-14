## The Challenge:

A new development team is tasked with creating a web based visualization tool. You are tasked with writing code to deploy the application that will eventually be added to a pipeline, but the application is not done yet, so you’ll use “hello world” as a placeholder. Anyone on the team must be able to maintain and execute the deployment code.  

### Requirements:

* Display the text “hello world” in a browser
* Create the deploy code that will be used in the pipeline for a single environment
* Make it generic so it can be deployed to multiple environments [dev & prod initially, but eventually others]
* Must be capable of completely tearing down deployed environments
* Use language[s] you prefer
* Use the cloud provider, tools, and technologies you prefer
* Use git to store your code. fork this repository or clone it
* Deliver the code to us via fork link or gzipped tar ball including the .git directory so we can see all commits

### Suggestions:

* Use a free tier of your cloud provider so we can run your code, aws preferred
* Instructions should be complete and clear
* Don’t reinvent the wheel
* Commit often and don't squash commits
* Don’t spend more than a few hours on the challenge. If some requirements could not be completed, let us know why.

## Prereqs

### Running locally
- cd into `helloworld` dir
- make sure your aws account is configured on your local machine. if not, run `aws configure`
- run `serverless plugin install -n serverless-esbuild`
- run `serverless deploy`
- navigate to the `GET` endpoint