This Application is based on the Microservices Architecture where you can post your posts and 
you can also add comments inside each posts.
It is created using React as Frontend and nodejs packages like Express, Axios on the backend.
It uses nodemon to respawn after changes in the files.
It has DockerFiles added to run it using build images, and to easily deploy it uses Kubernetes.
It uses ingress nginx Load Balancer to forward requests inside the node.
To automate the docker build, push and kubernetes config files, it uses scaffold.
It uses Microservices and the has mainly five services:-
* Posts service
* Comments Service
* Moderation Service
* Query Service
* Event Bus Service

HOW TO INSTALL
1. First run npm install
2. Install Docker and enable Kubernetes
3. Sign in to your docker and replace 7717737769 (my docker username) with yours inside infra/k8s files wherever applicable.
4. Add "posts.com 127.0.0.1" at the end of the file /etc/hosts
5. Add (kubectl apply -f url) given in this page :- https://kubernetes.github.io/ingress-nginx/deploy/#quick-start
7. Install scaffold using brew install scaffold 

RUN
* Run "scaffold dev" in the terminal directly.
* Open browser and run http://posts.com
