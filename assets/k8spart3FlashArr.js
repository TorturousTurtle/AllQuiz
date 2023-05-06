export const k8spart3FlashArr = [
  [
    "05b676f6-b990-4dcb-86d3-d5a00c35074c",
    "What is the primary function of Kubernetes?",
    "",
    "The primary function of Kubernetes is to automate deployment, scaling, and management of containerized applications.",
  ],
  [
    "6a0f84e6-2f06-43d7-b66f-0cad46a1dd61",
    "What is the smallest deployable unit in Kubernetes?",
    "",
    "The smallest deployable unit in Kubernetes is a Pod, which contains one or more containers.",
  ],
  [
    "73b3f593-8932-4892-853a-473c0930f34e",
    "Which Kubernetes object is used to maintain a stable network identity for applications?",
    "",
    "StatefulSet is a Kubernetes object used to maintain a stable network identity for applications that require it.",
  ],
  [
    "af3bae48-a6ea-4bde-9acb-dc518a452a8d",
    "What is the purpose of a Kubernetes Service?",
    "",
    "Kubernetes Service is used to expose applications to external traffic or other services within the cluster.",
  ],
  [
    "62b1151e-1758-4d1b-9aee-24f27e3c8f4d",
    "Which Kubernetes object is used to manage the desired state of an application?",
    "",
    "Deployment is a Kubernetes object that manages the desired state of an application by maintaining a specified number of replicas.",
  ],
  [
    "091fda3f-24ee-4c12-8a9c-ff3bdba35c43",
    "What type of storage does Kubernetes use to store its configuration data?",
    "",
    "Kubernetes uses etcd, a distributed key-value store, to store its configuration data.",
  ],
  [
    "6e66de3d-0235-4180-a544-00cb7a20249e",
    "What is the role of the Kubelet in a Kubernetes cluster?",
    "",
    "Kubelet is a node agent that runs on each node in the cluster and ensures containers are running in a Pod.",
  ],
  [
    "6efc4f0e-9571-457d-acc2-3d92864bc30a",
    "What is the main purpose of a Kubernetes Namespace?",
    "",
    "Kubernetes Namespaces are used to organize and isolate resources within a cluster for easier management and security.",
  ],
  [
    "6120c54e-78e4-485f-86a8-26d2404af7a9",
    "Which command is used to create a new Kubernetes cluster using kubeadm?",
    "",
    'To create a new Kubernetes cluster using kubeadm, use the "kubeadm init" command.',
  ],
  [
    "c2cc58a3-28c5-4b6e-b766-77513ff74a5c",
    "Which Kubernetes object is used to manage a set of replicated Pods?",
    "",
    "A ReplicaSet is a Kubernetes object that ensures a specified number of replicas for a Pod are running at any given time.",
  ],
  [
    "5b2777af-e811-4dab-a013-946d6337641a",
    "What is the purpose of a Kubernetes ConfigMap?",
    "",
    "Kubernetes ConfigMap is used to store non-confidential configuration data in key-value pairs, decoupling it from container images.",
  ],
  [
    "60da57f5-cbcc-449e-92cf-a941d1386ffe",
    "What is the purpose of a Kubernetes Secret?",
    "",
    "Kubernetes Secret is used to store sensitive data such as passwords, tokens, or keys, protecting it from accidental exposure or unauthorized access.",
  ],
  [
    "5a68884e-99bf-4a70-8df3-2394e3d83989",
    "What component in Kubernetes is responsible for exposing services to external clients or users?",
    "",
    "In Kubernetes, Ingress is responsible for exposing services to external clients or users, often with the help of a load balancer or reverse proxy.",
  ],
  [
    "22498fdd-7b46-4d00-a67a-76f55a6d581c",
    "Which component in Kubernetes is responsible for storing and managing container images?",
    "",
    "A container registry is a component in Kubernetes responsible for storing and managing container images.",
  ],
  [
    "1bc660ae-3e09-48e4-a4aa-7e9dc969e15c",
    "What Kubernetes component is responsible for managing container runtime?",
    "",
    "The container runtime is a Kubernetes component responsible for managing the lifecycle of containers, such as Docker or containerd.",
  ],
  [
    "2b58fbe4-67a5-4670-957b-05938190bb7c",
    "Which command is used to get information about running Pods in a Kubernetes cluster?",
    "",
    'To get information about running Pods in a Kubernetes cluster, use the "kubectl get pods" command.',
  ],
  [
    "db15fc46-3436-4c9a-a078-590d243f649e",
    "What Kubernetes object is used to ensure that a single instance of a Pod runs on each node in the cluster?",
    "",
    "A DaemonSet is a Kubernetes object that ensures a single instance of a Pod runs on each node in the cluster, typically used for node-level services.",
  ],
  [
    "2530cc76-d2bb-42d9-8209-cb42a6164aae",
    "Which command is used to create a Kubernetes object from a YAML file?",
    "",
    'To create a Kubernetes object from a YAML file, use the "kubectl create -f <filename.yaml>" command.',
  ],
  [
    "4852974f-4f09-401e-adca-1006ef99aae1",
    "Which Kubernetes component is responsible for distributing secrets and ConfigMaps to Pods?",
    "",
    "The Kubelet is responsible for distributing secrets and ConfigMaps to Pods in a Kubernetes cluster.",
  ],
  [
    "9d7fa316-a4cb-4e84-ac83-567ff61c9aa2",
    "What is the purpose of a Kubernetes Persistent Volume Claim (PVC)?",
    "",
    "Kubernetes Persistent Volume Claim (PVC) is used to request storage from a Persistent Volume (PV), allowing applications to consume storage resources.",
  ],
  [
    "1d55db87-eadb-40d1-8e57-ff73ffac43b9",
    "Which command is used to view the logs of a container in a Kubernetes cluster?",
    "",
    'To view the logs of a container in a Kubernetes cluster, use the "kubectl logs <pod_name> [-c container_name]" command.',
  ],
  [
    "f79746f1-ec3b-47e7-9540-5ec54aa98de0",
    "Which command is used to view detailed information about a specific Kubernetes object?",
    "",
    'To view detailed information about a specific Kubernetes object, use the "kubectl describe <object_type> <object_name>" command.',
  ],
  [
    "a50ec5e8-96c0-4256-9599-9ba178d35384",
    "What is the role of the Kubernetes API server?",
    "",
    "The Kubernetes API server exposes the Kubernetes API and acts as the frontend for the control plane, processing requests and updating etcd.",
  ],
  [
    "d0d58c3a-66a7-49f0-8ca7-21bf6682599e",
    "Which component in Kubernetes is responsible for managing network communication between Pods?",
    "",
    "Container Network Interface (CNI) is a component in Kubernetes responsible for managing network communication between Pods.",
  ],
  [
    "4772d49c-9c0b-49a4-8c35-3d521d14aa6a",
    "Which command is used to get information about nodes in a Kubernetes cluster?",
    "",
    'To get information about nodes in a Kubernetes cluster, use the "kubectl get nodes" command.',
  ],
  [
    "7902b7af-36c3-4f77-8d1d-45f1d4201b00",
    "What is the purpose of a Kubernetes Job?",
    "",
    "Kubernetes Job is used to run short-lived, one-off tasks that complete and then exit, ensuring that a specified number of them successfully terminate.",
  ],
  [
    "c64a5c66-72a4-413f-acd1-bed2db82226c",
    "What is the purpose of a Kubernetes CronJob?",
    "",
    "Kubernetes CronJob is used to run tasks on a schedule, creating a Job object for each execution instance.",
  ],
  [
    "d284d4a4-d261-4e83-bb10-b04284bd5efd",
    "Which command is used to get information about services in a Kubernetes cluster?",
    "",
    'To get information about services in a Kubernetes cluster, use the "kubectl get services" command.',
  ],
  [
    "bf531f67-b1f3-4ec0-aae4-38b885b74ede",
    "Which Kubernetes object is used to define and manage network policies?",
    "",
    "NetworkPolicy is a Kubernetes object used to define and manage network policies for controlling traffic between Pods and Services.",
  ],
  [
    "d237460c-da8e-488b-b682-d260644f8518",
    "Which command is used to delete a Kubernetes object?",
    "",
    'To delete a Kubernetes object, use the "kubectl delete <object_type> <object_name>" command.',
  ],
  [
    "d3998534-6e35-4324-8bbf-9ccc9dc329ae",
    "What type of Kubernetes Service is used to expose an application using a static IP address?",
    "",
    "LoadBalancer is a type of Kubernetes Service that exposes an application using a static IP address, typically provisioned by a cloud provider.",
  ],
  [
    "25590bb9-08f1-4459-b611-81fb8e6d8ae7",
    "Which Kubernetes object is used to manage application configuration and settings?",
    "",
    "ConfigMap is a Kubernetes object used to manage application configuration and settings, decoupling it from container images.",
  ],
  [
    "639a44c2-6e55-4c43-9bb4-d288935b76ef",
    "What is the purpose of Kubernetes Controllers?",
    "",
    "Kubernetes Controllers manage the desired state of various Kubernetes objects, ensuring that the actual state converges to the desired state.",
  ],
  [
    "37c4e05c-a8ab-4889-96ea-fd6970781275",
    "Which Kubernetes component manages communication between the control plane and worker nodes?",
    "",
    "kube-controller-manager is a Kubernetes component that manages communication between the control plane and worker nodes, running various controllers.",
  ],
  [
    "fb4870a1-3649-404b-97c2-376d889c88f5",
    "Which Kubernetes component is responsible for scheduling Pods to Nodes?",
    "",
    "kube-scheduler is a Kubernetes component responsible for scheduling Pods to Nodes based on resource requirements and other constraints.",
  ],
  [
    "5bae1b75-2168-449a-ad39-c30f59378122",
    "What is the purpose of Kubernetes Taints?",
    "",
    "Kubernetes Taints are used to restrict which Pods can be scheduled on a Node, allowing for more fine-grained control over resource allocation.",
  ],
  [
    "a232647a-8a78-4d95-bf51-919204edf9e4",
    "What is the purpose of Kubernetes Tolerations?",
    "",
    "Kubernetes Tolerations are used to allow Pods to be scheduled on tainted Nodes, enabling them to tolerate specific Taints applied to Nodes.",
  ],
  [
    "cc76cd7e-7fb0-43dd-ac25-93ba81515a54",
    "What is the purpose of Kubernetes Affinity?",
    "",
    "Kubernetes Affinity is used to control Pod placement on Nodes based on various rules and constraints, such as node labels, resource requirements, or inter-Pod affinity.",
  ],
  [
    "9115bb20-0dbb-4a37-8a43-489b1db5701f",
    "What is the purpose of Kubernetes Anti-Affinity?",
    "",
    "Kubernetes Anti-Affinity is used to prevent Pods with the same labels from running on the same Node, ensuring that they are distributed across the cluster.",
  ],
  [
    "88af612e-829d-47fe-8cc0-59d5c74f546f",
    "Which Kubernetes object is used to define custom resource types?",
    "",
    "CustomResourceDefinition (CRD) is a Kubernetes object used to define custom resource types, extending the capabilities of the Kubernetes API.",
  ],
  [
    "f3ada019-374f-401d-a38d-12aafbae5cf9",
    "What is the purpose of a Kubernetes Service Account?",
    "",
    "Kubernetes Service Account is used to authenticate and authorize applications within the cluster, providing access to the Kubernetes API.",
  ],
  [
    "1ecbe978-1924-4070-93b9-64fae0adfabe",
    "Which command is used to apply a configuration change to a Kubernetes object?",
    "",
    'To apply a configuration change to a Kubernetes object, use the "kubectl apply -f <filename.yaml>" command.',
  ],
  [
    "bbf81709-5007-43b0-ada6-207e25c6712b",
    "Which command is used to execute a command within a running container in a Kubernetes cluster?",
    "",
    'To execute a command within a running container in a Kubernetes cluster, use the "kubectl exec <pod_name> [-c container_name] -- <command>" command.',
  ],
  [
    "2c64d586-8687-4187-bcd4-d3f0bced52f4",
    "What is the purpose of a Kubernetes Horizontal Pod Autoscaler (HPA)?",
    "",
    "Kubernetes Horizontal Pod Autoscaler (HPA) is used to automatically scale the number of Pods in a Deployment or ReplicaSet based on resource utilization, such as CPU or memory usage.",
  ],
  [
    "dbd3b7f8-9b75-4ab1-bc36-7713072ce01a",
    "What is the purpose of a Kubernetes Vertical Pod Autoscaler (VPA)?",
    "",
    "Kubernetes Vertical Pod Autoscaler (VPA) is used to automatically adjust container resource requests (CPU and memory) based on usage, optimizing resource allocation within the cluster.",
  ],
  [
    "f95295fe-ceb0-4253-b3c3-b28e1d091635",
    "Which Kubernetes object is used to define a set of Pods that can be scaled independently?",
    "",
    "A ReplicaSet is a Kubernetes object that defines a set of Pods that can be scaled independently, ensuring a specified number of them are running at all times.",
  ],
  [
    "7b20b3c0-a0ed-4747-b975-56ce4b4c6df9",
    "Which Kubernetes object is used to roll out updates to applications and manage their history?",
    "",
    "A Deployment is a Kubernetes object that manages the rollout of updates to applications and their history, providing declarative updates for Pods and ReplicaSets.",
  ],
  [
    "3b4b67fc-985b-488a-8756-54cc8a629344",
    "Which Kubernetes object is used to expose a set of Pods to external traffic?",
    "",
    "A Kubernetes Service object is used to expose a set of Pods to external traffic, providing stable IP addresses, load balancing, and other features.",
  ],
  [
    "96a70ea3-a7a4-422a-b604-858592db11a7",
    "Which Kubernetes object is used to configure network policies for Pods?",
    "",
    "A Kubernetes NetworkPolicy object is used to define network policies for Pods, controlling ingress and egress traffic between Pods and other network endpoints.",
  ],
  [
    "3eae071a-bb85-42c2-a6c5-14d9d820c36d",
    "What is the purpose of a Kubernetes Ingress Controller?",
    "",
    "A Kubernetes Ingress Controller is used to manage external access to services in a cluster, typically through HTTP/HTTPS load balancing and SSL/TLS termination.",
  ],
  [
    "c77c11c7-6e57-40b7-9bb3-5701998e082a",
    "Which command is used to create a new Kubernetes object from a configuration file?",
    "",
    'To create a new Kubernetes object from a configuration file, use the "kubectl create -f <filename.yaml>" command.',
  ],
  [
    "20387df8-5a95-4404-8202-bdc4b58fd5c8",
    "Which command is used to view the current state of a Kubernetes object?",
    "",
    'To view the current state of a Kubernetes object, use the "kubectl get <object_type> [<object_name>]" command.',
  ],
  [
    "f76885c4-11d2-4282-9757-c51a4e80aa50",
    "Which command is used to view detailed information about a Kubernetes object?",
    "",
    'To view detailed information about a Kubernetes object, use the "kubectl describe <object_type> [<object_name>]" command.',
  ],
  [
    "1170b5d6-391a-4a06-ad37-011eb8019a68",
    "What is the primary role of the Kubernetes API server?",
    "",
    "The primary role of the Kubernetes API server is exposing the Kubernetes API.",
  ],
  [
    "99529e19-ae33-4f80-8095-9a08f88b0aeb",
    "Which Kubernetes component is responsible for distributing containers across nodes?",
    "",
    "The kube-scheduler is responsible for distributing containers across nodes.",
  ],
  [
    "cf4d2d46-f75b-4b7a-b3e4-2ba44ab3f476",
    "Which Kubernetes object represents a desired state for a group of replicas?",
    "",
    "A Deployment represents the desired state for a group of replicas in Kubernetes.",
  ],
  [
    "331a1421-294e-4f0c-b662-d5e2d3bf7c0c",
    "Which of the following is a key-value store used by Kubernetes for configuration data and metadata?",
    "",
    "Kubernetes uses etcd as a key-value store for configuration data and metadata.",
  ],
  [
    "0db74335-fbff-4314-8c0a-b1fe22e6904d",
    "Which Kubernetes object provides a single IP address and a DNS name for a set of pods?",
    "",
    "A Service provides a single IP address and a DNS name for a set of pods in Kubernetes.",
  ],
  [
    "435adb70-8bc8-41ff-8ab5-35d8dc59f37d",
    "Which Kubernetes object is used to manage updates and rollbacks for a set of replicas?",
    "",
    "A Deployment is used to manage updates and rollbacks for a set of replicas in Kubernetes.",
  ],
  [
    "6454c03b-e801-4b4a-b61a-3368598b5885",
    "Which Kubernetes component is responsible for ensuring that the running containers match their desired state?",
    "",
    "The kubelet is responsible for ensuring that the running containers match their desired state in Kubernetes.",
  ],
  [
    "e735263a-c10f-4991-86a5-6d707795ce9f",
    "In a Kubernetes cluster, what is the primary function of a worker node?",
    "",
    "The primary function of a worker node in a Kubernetes cluster is to run containerized applications.",
  ],
  [
    "83361e9e-24ad-46e4-b5da-140a215f1b39",
    "What is the smallest and simplest unit in the Kubernetes object model?",
    "",
    "A Pod is the smallest and simplest unit in the Kubernetes object model.",
  ],
  [
    "8002c0a0-8271-4f16-9ad9-34f36c7f83a8",
    "Which command can be used to create a new namespace in a Kubernetes cluster?",
    "",
    'You can create a new namespace in a Kubernetes cluster using the command "kubectl create namespace".',
  ],
  [
    "292fc9d3-0647-4bfa-8be2-a0241c5c17cf",
    "Which of the following is a container runtime supported by Kubernetes?",
    "",
    "Docker is a container runtime supported by Kubernetes.",
  ],
  [
    "041d4335-0ee6-401e-a123-cfd4e4ba6408",
    "What type of Kubernetes object is used to expose an application running on a set of Pods as a network service?",
    "",
    "A Service is used to expose an application running on a set of Pods as a network service in Kubernetes.",
  ],
  [
    "f8293e45-53df-4bbe-bfa0-4972b56843d8",
    "Which of the following Kubernetes components is responsible for managing network traffic between Pods?",
    "",
    "kube-proxy is responsible for managing network traffic between Pods in a Kubernetes cluster.",
  ],
  [
    "b58c99f8-d25a-49dd-a45e-6e1628ecb61c",
    "What command is used to get the logs of a specific Pod in Kubernetes?",
    "",
    'The command "kubectl logs" is used to get the logs of a specific Pod in Kubernetes.',
  ],
  [
    "326ee180-9602-4d02-84de-654e9d674785",
    "Which Kubernetes object is used to ensure that a specified number of replicas for a pod are running at all times?",
    "",
    "A ReplicaSet is used to ensure that a specified number of replicas for a pod are running at all times in Kubernetes.",
  ],
  [
    "da6b2aaa-c806-482c-9931-ee551a030235",
    "Which Kubernetes object is used to manage a group of containers that must be co-located on the same host?",
    "",
    "A Pod is used to manage a group of containers that must be co-located on the same host in Kubernetes.",
  ],
  [
    "3c7e0cd6-21fd-4ca0-908e-47b5b59d33b4",
    "Which of the following storage types is supported by Kubernetes?",
    "",
    "Kubernetes supports various storage types, such as AWS EBS, CephFS, and NFS.",
  ],
  [
    "f3712dc4-fb44-474a-9c8c-13203a2b51ca",
    "What does the abbreviation 'k8s' stand for?",
    "",
    "The abbreviation 'k8s' stands for Kubernetes.",
  ],
  [
    "9e5ddeab-87a0-44c7-96a0-bfde12908bad",
    "Which Kubernetes object is used to create a set of identical Pods and maintain a stable hostname, like a StatefulSet but without any guarantees of ordering or uniqueness?",
    "",
    "A Headless Service is used to create a set of identical Pods and maintain a stable hostname, like a StatefulSet but without any guarantees of ordering or uniqueness.",
  ],
  [
    "54a4bba1-562a-43c7-a888-d7f18395eb37",
    "Which Kubernetes object can be used to horizontally scale the number of Pods based on CPU utilization?",
    "",
    "A HorizontalPodAutoscaler can be used to horizontally scale the number of Pods based on CPU utilization in Kubernetes.",
  ],
  [
    "51b16c45-91b3-4296-8cef-406504a2fd3e",
    "Which command is used to update the image of a Kubernetes Deployment?",
    "",
    'The command "kubectl set image" is used to update the image of a Kubernetes Deployment.',
  ],
  [
    "6c0e9f6a-bdd2-4c31-973a-582153b39b7f",
    "What is the Kubernetes command to delete a specific pod?",
    "",
    'The command "kubectl delete pod" is used to delete a specific pod in Kubernetes.',
  ],
  [
    "45d0e860-7897-4b73-9fb7-7f8dff518eb1",
    "Which Kubernetes object can be used to manage the lifecycle of a stateful application?",
    "",
    "A StatefulSet can be used to manage the lifecycle of a stateful application in Kubernetes.",
  ],
  [
    "a85050f0-fe54-4c7f-b52b-466b6e90c68b",
    "What is the purpose of Kubernetes Secrets?",
    "",
    "The purpose of Kubernetes Secrets is to store sensitive information, like passwords and API keys.",
  ],
  [
    "b98ff169-6c6a-45a4-846a-b3fc6f68b9a9",
    "Which of the following is a Kubernetes add-on used for monitoring and logging?",
    "",
    "Prometheus and Fluentd are Kubernetes add-ons used for monitoring and logging.",
  ],
  [
    "aed7bbc6-7f32-4f79-96df-36ccc393c2ca",
    "What command is used to view the current configuration context of your Kubernetes cluster?",
    "",
    'The command "kubectl config current-context" is used to view the current configuration context of your Kubernetes cluster.',
  ],
  [
    "0b096039-0b02-4a34-83e3-25894d9b95d0",
    "Which of the following is a Kubernetes add-on for service mesh?",
    "",
    "Istio is a Kubernetes add-on for service mesh.",
  ],
  [
    "7a54fbeb-85e6-4b49-a16c-aea6bb6307cd",
    "What Kubernetes object is used to specify a set of rules for load balancing and routing external traffic to services within the cluster?",
    "",
    "An Ingress is used to specify a set of rules for load balancing and routing external traffic to services within the cluster in Kubernetes.",
  ],
  [
    "2c1cabb7-6cfd-4c8a-8028-9c09cb51faa4",
    "Which command is used to view the details of a specific Kubernetes resource, like a pod or service?",
    "",
    'The command "kubectl describe" is used to view the details of a specific Kubernetes resource, like a pod or service.',
  ],
  [
    "ac9a0466-89b2-4a67-8fc7-fa5de5d83081",
    "Which of the following is a valid Kubernetes label selector?",
    "",
    'A valid Kubernetes label selector is "app=myApp".',
  ],
  [
    "1a9740f3-fc2f-4c6e-b1d4-d51050b23479",
    "Which Kubernetes command can be used to troubleshoot DNS issues within a cluster?",
    "",
    'The command "kubectl run --generator=run-pod/v1 --rm -it" can be used to troubleshoot DNS issues within a Kubernetes cluster.',
  ],
  [
    "cb06a75a-ab72-47ca-83fe-8fed03ab85fc",
    "Which command is used to scale a Kubernetes Deployment?",
    "",
    'The command "kubectl scale" is used to scale a Kubernetes Deployment.',
  ],
  [
    "133853fb-c84b-4043-a6f7-52d0a0d0250a",
    "What is the purpose of a Kubernetes Persistent Volume (PV)?",
    "",
    "The purpose of a Kubernetes Persistent Volume (PV) is to provide long-term storage for containerized applications.",
  ],
  [
    "26ea35db-adfc-489a-a7e5-c6603eb28194",
    "Which of the following is a Kubernetes network policy that allows all incoming traffic?",
    "",
    'A Kubernetes network policy that allows all incoming traffic is "Allow all ingress".',
  ],
  [
    "29d73145-ff9d-43e7-8854-12416c0c0001",
    "What is the purpose of Kubernetes Role-Based Access Control (RBAC)?",
    "",
    "The purpose of Kubernetes Role-Based Access Control (RBAC) is to define and enforce authorization policies in a Kubernetes cluster.",
  ],
  [
    "04f389e0-cee3-41c5-969a-dbe997dbbeba",
    "Which of the following is a valid Kubernetes annotation?",
    "",
    'A valid Kubernetes annotation is "key:value".',
  ],
  [
    "2c0d649c-6739-48c5-aa2f-d851044bf0ca",
    "Which command is used to apply a YAML configuration file to a Kubernetes cluster?",
    "",
    'The command "kubectl apply -f" is used to apply a YAML configuration file to a Kubernetes cluster.',
  ],
  [
    "fcb2d69f-0f8f-435f-b47d-bbf18f17ed6f",
    "Which of the following is a Kubernetes add-on for managing container logs?",
    "",
    "Fluentd is a Kubernetes add-on for managing container logs.",
  ],
  [
    "681de475-b10b-4b59-9a07-60b362fcb8d4",
    "What is the primary function of a Kubernetes Node Controller?",
    "",
    "The primary function of a Kubernetes Node Controller is to manage the lifecycle and status of nodes in the cluster.",
  ],
  [
    "77ccbebe-cfd9-4972-930d-1a12138282ca",
    "What is the main function of the Kubernetes kubelet?",
    "",
    "The main function of the Kubernetes kubelet is to ensure that containers are running in a Pod.",
  ],
  [
    "1589a9ff-0468-49b2-a04b-491e90fde8f7",
    "Which of the following is a Kubernetes add-on for managing container networking?",
    "",
    "Calico is a Kubernetes add-on for managing container networking.",
  ],
  [
    "95f43c1c-a86b-40ea-a17d-e7caf261064e",
    "What is the purpose of a Kubernetes Job?",
    "",
    "The purpose of a Kubernetes Job is to run a short-lived, one-off task that completes and then exits.",
  ],
  [
    "02c2c578-f5b7-4644-a333-6bcc21f6a993",
    "Which Kubernetes object is used to ensure that a specified number of replicas for a pod are running across all nodes in the cluster?",
    "",
    "A DaemonSet is used to ensure that a specified number of replicas for a pod are running across all nodes in the cluster in Kubernetes.",
  ],
  [
    "ef21c254-5e06-4cf7-812b-2c98378e75fd",
    "Which of the following is a Kubernetes add-on for managing container storage?",
    "",
    "Rook is a Kubernetes add-on for managing container storage.",
  ],
  [
    "12ee8040-5a8c-43b6-89d1-adc99629e452",
    "What is the purpose of a Kubernetes Namespace?",
    "",
    "The purpose of a Kubernetes Namespace is to provide a logical separation of resources within a cluster.",
  ],
  [
    "760fdf0f-c1e1-4074-b0ea-574f0aac44d5",
    "Which of the following is a Kubernetes add-on for container security?",
    "",
    "Aqua Security is a Kubernetes add-on for container security.",
  ],
  [
    "ee9d5990-8ac0-43f0-ac94-862c604c2ea3",
    "What Kubernetes object is used to allocate a specific amount of compute resources (CPU and memory) to a container?",
    "",
    "Resource Request and Limit are used to allocate a specific amount of compute resources (CPU and memory) to a container in Kubernetes.",
  ],
  [
    "4663e20a-3ce9-447e-bfc4-b67e79702ca6",
    "Which command is used to attach to the running container for interactive troubleshooting?",
    "",
    'The command "kubectl exec -it" is used to attach to the running container for interactive troubleshooting in Kubernetes.',
  ],
  [
    "4033cd53-fa2b-4fae-83c0-40bb7202837b",
    "What is the main difference between a Kubernetes ConfigMap and a Secret?",
    "",
    "The main difference between a Kubernetes ConfigMap and a Secret is that Secrets are used for sensitive information, while ConfigMaps store non-sensitive configuration data.",
  ],
  [
    "71c286ec-a6c3-4b4f-87ab-b12b90447985",
    "What is the purpose of a Kubernetes Service Account?",
    "",
    "The purpose of a Kubernetes Service Account is to provide an identity for processes that run in a Pod.",
  ],
  [
    "2429dd00-88de-4142-b24a-70239b5b9c72",
    "Which command is used to create a new Namespace in a Kubernetes cluster?",
    "",
    'The command "kubectl create namespace" is used to create a new Namespace in a Kubernetes cluster.',
  ],
  [
    "a2854ba8-05c0-49b5-86ee-5c0def8b779f",
    "Which of the following is a valid Kubernetes port specification?",
    "",
    'A valid Kubernetes port specification is "containerPort: 8080".',
  ],
  [
    "32f4dfa4-ee2a-49e6-a812-8b5538c1c06d",
    "Which Kubernetes command can be used to view the logs of a specific container within a Pod?",
    "",
    'The command "kubectl logs" can be used to view the logs of a specific container within a Pod in Kubernetes.',
  ],
  [
    "c38ce38d-2fca-4074-be01-a829455113d7",
    "Which of the following is a valid Kubernetes environment variable specification?",
    "",
    'A valid Kubernetes environment variable specification is "name: MY_ENV_VAR, valueFrom: secretKeyRef".',
  ],
  [
    "a96fe628-098f-415c-80c3-a5f2bf231c74",
    "What is the purpose of Kubernetes Taints and Tolerations?",
    "",
    "The purpose of Kubernetes Taints and Tolerations is to control which nodes a Pod can be scheduled on.",
  ],
  [
    "7fdd7477-b863-4ad1-9860-511852dd80e9",
    "Which command is used to update the image of a Deployment in a Kubernetes cluster?",
    "",
    'The command "kubectl set image" is used to update the image of a Deployment in a Kubernetes cluster.',
  ],
  [
    "e3c8792c-5598-42a5-aa0b-a7ffa5e5e43e",
    "What is the purpose of a Kubernetes Ingress object?",
    "",
    "The purpose of a Kubernetes Ingress object is to manage external access to services within a cluster.",
  ],
  [
    "f3ad2e65-c364-416b-ab07-1ea5580ba2e6",
    "What is the primary function of the Kubernetes kube-proxy?",
    "",
    "The primary function of the Kubernetes kube-proxy is to manage network traffic between Pods and Services.",
  ],
  [
    "593d9930-3997-4996-9ebd-03d9d5307cd3",
    "Which of the following is a Kubernetes add-on for monitoring container performance?",
    "",
    "Prometheus is a Kubernetes add-on for monitoring container performance.",
  ],
  [
    "35f69bd1-0935-4ff4-8507-cb5ce0e9c33f",
    "What Kubernetes object is used to store and manage access credentials, such as API keys, OAuth tokens, or SSH keys?",
    "",
    "A Kubernetes Secret is used to store and manage access credentials, such as API keys, OAuth tokens, or SSH keys.",
  ],
  [
    "17202f14-637f-4587-8457-8db6bf85b700",
    "Which Kubernetes command is used to create a new ConfigMap from a file?",
    "",
    'The command "kubectl create configmap --from-file" is used to create a new ConfigMap from a file in Kubernetes.',
  ],
  [
    "06226191-320f-44e0-a7f9-f78648e133c3",
    "What is the purpose of a Kubernetes ReplicaSet?",
    "",
    "The purpose of a Kubernetes ReplicaSet is to ensure that a specified number of replicas for a pod are running at any given time.",
  ],
  [
    "7df8fdb0-6aa4-4eda-b3a6-11d25fef786e",
    "What command is used to create the necessary permissions for the Cluster Agent and node-based Agent in a Kubernetes cluster?",
    "",
    'The correct command is: kubectl create -f "cluster-agent-rbac.yaml"',
  ],
  [
    "4263213f-691f-4a86-a5c8-b9c475f8e43e",
    "Which Kubernetes object is used to provide the Datadog API key to the Agent without embedding the API key in the deployment manifests?",
    "",
    "The correct Kubernetes object is Secret.",
  ],
  [
    "914e2d6f-6c24-45bc-af3e-3b9583e77a6e",
    "What is the default port used by the Datadog Cluster Agent?",
    "",
    "The default port used by the Datadog Cluster Agent is 5005.",
  ],
  [
    "1d7b3b29-a529-4467-97c8-4e9d2ce4a736",
    "Which Kubernetes object is used to expose the Datadog Cluster Agent service within the cluster?",
    "",
    "The correct Kubernetes object is Service.",
  ],
  [
    "0f6f9194-8952-4038-a7fd-6e3e8368ae24",
    "What type of Kubernetes Service is used to expose the Datadog Cluster Agent within the cluster?",
    "",
    "The correct type of Kubernetes Service is ClusterIP.",
  ],
  [
    "016dcbaf-f59b-4d6f-81f0-f25a2d8a5501",
    'What is the purpose of the "en" section in the Datadog Cluster Agent Deployment manifest?',
    "",
    'The "env" section is used to set environment variables for the Cluster Agent container.',
  ],
  [
    "60706514-8aea-4c25-93e0-53a124800fb9",
    'What is the purpose of the "DD_CLUSTER_AGENT_ENABLED" environment variable?',
    "",
    'The "DD_CLUSTER_AGENT_ENABLED" environment variable is used to enable communication between the node-based Agents and the Cluster Agent.',
  ],
  [
    "ae73b899-7524-46c8-9188-19454470f0b9",
    "Which environment variable is used to specify the Datadog API key for the Cluster Agent?",
    "",
    "The correct environment variable is DD_API_KEY.",
  ],
  [
    "70ae67bf-7265-4720-b304-8aa165dae11b",
    "Which environment variable is used to specify the Cluster Agent service endpoint for the node-based Agents?",
    "",
    "The correct environment variable is DD_CLUSTER_AGENT_KUBERNETES_SERVICE_NAME.",
  ],
  [
    "2706cb78-974e-471a-9dd9-dc8fc27f74b6",
    "Which environment variable is used to specify the secret token for authentication between the Cluster Agent and node-based Agents?",
    "",
    "The correct environment variable is DD_CLUSTER_AGENT_AUTH_TOKEN.",
  ],
  [
    "bb0d168d-9e5b-4565-8a91-e3beea063f4f",
    'In the Datadog Cluster Agent Deployment manifest, what is the purpose of the "volumeMounts" section?',
    "",
    'The "volumeMounts" section is used to define the volumes and volume mounts for the Cluster Agent container.',
  ],
  [
    "e295e413-ac83-46f6-ae9c-add39752cc17",
    'In the Datadog Cluster Agent Deployment manifest, what is the purpose of the "volumes" section?',
    "",
    'The "volumes" section is used to define the volumes used by the Cluster Agent container.',
  ],
  [
    "399d4c40-c5f1-4a7c-8f2d-f37c9149bd6d",
    "Which Kubernetes object is used to store the Datadog API key as a secret?",
    "",
    "The correct Kubernetes object is Secret.",
  ],
  [
    "8c56ce50-eb7d-4264-bad5-317b74fde520",
    "Which Kubernetes object is used to store the Datadog Cluster Agent configuration settings?",
    "",
    "The correct Kubernetes object is ConfigMap.",
  ],
  [
    "2c51807c-c222-46eb-93f8-b0ad6aaa24cf",
    'What is the purpose of the "selector" field in the Datadog Cluster Agent Deployment manifest?',
    "",
    'The "selector" field is used to match the Pods managed by the Deployment.',
  ],
  [
    "d0e6d81b-d714-49f3-b9ea-bb3ed7c4a7f5",
    "Which environment variable is used to enable the Kubernetes Events collection feature in the Datadog Cluster Agent?",
    "",
    "The correct environment variable is DD_COLLECT_KUBERNETES_EVENTS.",
  ],
  [
    "243cd11c-d09c-41de-96bf-3da8a5c93608",
    "Which environment variable is used to enable the Kubernetes State Metrics feature in the Datadog Cluster Agent?",
    "",
    "The correct environment variable is DD_KUBERNETES_STATE.",
  ],
  [
    "cecaffb5-9189-4265-bdc7-305436c4f236",
    'What is the purpose of the "ports" section in the Datadog Cluster Agent Service manifest?',
    "",
    'The "ports" section is used to define the ports on which the Cluster Agent listens.',
  ],
  [
    "926e3005-54c6-4c20-9011-9f065da98048",
    'What is the purpose of the "tolerations" section in the Datadog Cluster Agent Deployment manifest?',
    "",
    'The "tolerations" section is used to allow the Cluster Agent to run on tainted nodes.',
  ],
  [
    "077f7e4b-c351-4339-b110-8fa9698eff0f",
    "What does the Datadog Agent's Autodiscovery feature do?",
    "",
    "The Datadog Agent's Autodiscovery feature continuously monitors containerized applications as they scale or shift across containers and hosts.",
  ],
  [
    "3058e7a6-576f-4486-ab42-a47bfcc56196",
    "What is kube-state-metrics?",
    "",
    "Kube-state-metrics is an optional cluster add-on that provides cluster-level metrics, such as the count of Kubernetes objects like pods, available and unavailable.",
  ],
  [
    "a1037e9b-86c2-489e-a91d-36f0c06b5242",
    "What do Kubernetes pod annotations do?",
    "",
    "Kubernetes pod annotations specify which Datadog check to apply to a pod, as well as any details necessary to configure the monitoring check.",
  ],
  [
    "dba6cb9d-2887-4ce2-b785-e1d3b601d55d",
    "What is the purpose of tags in Datadog?",
    "",
    "Tags in Datadog are used to sort, filter, and aggregate data based on metadata from Kubernetes, Docker, cloud services, and other technologies.",
  ],
  [
    "dbed6727-c260-46de-b9a6-4b7b879671c3",
    "What is the main purpose of the Datadog Cluster Agent?",
    "",
    "The main purpose of the Datadog Cluster Agent is to collect metrics and other telemetry data from your Kubernetes cluster.",
  ],
  [
    "c1860daf-5904-4aab-a3c6-9816b50395a6",
    "What does the Datadog Agent's Autodiscovery feature listen for?",
    "",
    "The Datadog Agent's Autodiscovery feature listens for container creation or deletion events and applies configuration templates accordingly.",
  ],
  [
    "70866350-059c-4a9b-8af7-4ce17ac5e4ad",
    "Which of the following services are automatically configured by Datadog Agent's Autodiscovery?",
    "",
    "Datadog Agent's Autodiscovery automatically configures services like kube-state-metrics, Kubernetes API server, Consul, CoreDNS, and etcd.",
  ],
  [
    "ecaf6fa8-2a18-47dc-8140-af955dfcec12",
    "How can you deploy kube-state-metrics to your cluster?",
    "",
    "You can deploy kube-state-metrics to your cluster using a set of manifests from the official kube-state-metrics project.",
  ],
  [
    "85b55168-7155-47f7-903e-066b3d914e17",
    "What is the purpose of the kubelet role in Kubernetes?",
    "",
    "The kubelet role in Kubernetes ensures that containers are running in a pod as expected.",
  ],
  [
    "25a4a7cf-ca9d-425c-b1a4-8704a9141b11",
    "Which Kubernetes object represents a set of replicated Pods?",
    "",
    "A Deployment in Kubernetes represents a set of replicated Pods.",
  ],
  [
    "17c39451-78c5-4387-a213-ea89acdfdd2e",
    "What does a Kubernetes Service provide?",
    "",
    "A Kubernetes Service provides a stable IP address and DNS name for a group of Pods.",
  ],
  [
    "6ddd4fc9-c5e5-4729-9f88-37c8957dc7d9",
    "Which Kubernetes object is used to store and manage sensitive information?",
    "",
    "A Kubernetes Secret is used to store and manage sensitive information, such as passwords, OAuth tokens, and SSH keys.",
  ],
  [
    "1ab76d92-00f8-4b79-ba12-5d5ac0a31deb",
    "Which Kubernetes component distributes traffic to Pods?",
    "",
    "The kube-proxy component in Kubernetes distributes traffic to Pods based on the configured Services.",
  ],
  [
    "ed2b7456-d569-4d18-a53e-1f80f99fe0be",
    "Which Kubernetes component watches for new or updated ConfigMaps and Secrets?",
    "",
    "The kubelet component in Kubernetes watches for new or updated ConfigMaps and Secrets and updates the corresponding Pods as needed.",
  ],
  [
    "39446411-9ded-48ee-b9d4-94a433d99155",
    "Which Kubernetes component schedules Pods to Nodes?",
    "",
    "The kube-scheduler component in Kubernetes schedules Pods to Nodes based on resource requirements and other constraints.",
  ],
  [
    "cbda6c52-c331-4130-acf1-f614f42d317d",
    "Which Kubernetes component manages the lifecycle of Deployments?",
    "",
    "The kube-controller-manager component in Kubernetes manages the lifecycle of Deployments, ReplicaSets, and other higher-level abstractions.",
  ],
];
