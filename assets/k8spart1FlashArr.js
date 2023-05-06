export const k8spart1FlashArr = [
  [
    "33854681-2524-4579-ade5-8714e382fbb0",
    "What is Kubernetes?",
    "",
    "Kubernetes is a container orchestration platform that automates the scheduling, scaling, and maintenance of containerized applications.",
  ],
  [
    "c091a3e8-ab29-4f15-95e1-455be8f3303d",
    "What is a pod in Kubernetes?",
    "",
    "A pod is the smallest deployable unit in Kubernetes that can be created, scheduled, and managed. It contains one or more containers that share the same network namespace.",
  ],
  [
    "792838f5-e11a-4e46-837b-c1a29f11a5d8",
    "What is a Kubernetes controller?",
    "",
    "A Kubernetes controller is a component responsible for keeping the current state of the cluster in line with the desired state. Controllers watch the API server for any changes to cluster resources and make changes of their own to keep the actual state of the cluster in line with the desired state.",
  ],
  [
    "b9d71b49-0702-4aef-ac62-8a4527b3d900",
    "What is a Kubernetes service?",
    "",
    "A Kubernetes service is an object that provides a stable IP address to the external world and allows communication between components. Services act as an endpoint for a set of pods by exposing a stable IP address to the external world and hiding the complexity of the cluster’s dynamic pod scheduling on the backend.",
  ],
  [
    "599b0540-349f-4dc8-a015-d7ddb450a466",
    "What is container orchestration?",
    "",
    "Container orchestration is the automated management of containerized applications, including scheduling, scaling, and resource allocation.",
  ],
  [
    "cb44b31a-b629-4c1b-b3b3-42f46e3a7272",
    "What is a container runtime?",
    "",
    "A container runtime is the software responsible for running containers on a host, such as Docker or containerd.",
  ],
  [
    "45b009b3-2b8c-4cbe-bf3b-75666ce74a5a",
    "What is containerization?",
    "",
    "Containerization is the process of encapsulating an application and its dependencies in a container, which can then be deployed and run in any environment that supports containerization.",
  ],
  [
    "ef92eac0-f19a-4aef-92d7-cc2f206aeb7b",
    "What is a Kubernetes node?",
    "",
    "A Kubernetes node is a virtual or physical machine that runs containers.",
  ],
  [
    "8de9ee05-edc8-4b30-96af-78f85d3d90e1",
    "What is Kubernetes often abbreviated as?",
    "",
    "Kubernetes is often abbreviated as K8s.",
  ],
  [
    "0ade4055-bb59-408e-93f1-0aee541121b6",
    "Kubernetes was first open sourced by which company in 2014?",
    "",
    "Kubernetes was first open sourced by Google in 2014.",
  ],
  [
    "a4271006-f5eb-45bb-9da8-f95634342102",
    "What does Kubernetes automate in container infrastructure?",
    "",
    "Kubernetes automates scheduling, scaling, and maintenance of containers in container infrastructure.",
  ],
  [
    "7421c0b5-911d-4e8c-81a9-5a44cab37480",
    "Which Kubernetes component is responsible for creating and destroying pods dynamically?",
    "",
    "A replica set in Kubernetes is responsible for creating and destroying pods dynamically.",
  ],
  [
    "da70fd8a-7978-4367-9010-fc2db8c35ab9",
    "What is the smallest deployable unit that can be created, scheduled, and managed with Kubernetes?",
    "",
    "The smallest deployable unit that can be created, scheduled, and managed with Kubernetes is a pod.",
  ],
  [
    "5ec8f4eb-f5c8-429d-991b-c2cdfc5d8f6b",
    "What is a higher-level controller that manages replica sets in Kubernetes?",
    "",
    "A Deployment is a higher-level controller that manages replica sets in Kubernetes.",
  ],
  [
    "be4ab629-e40d-4bf1-87d2-34d60e55d62f",
    "Which component of a Kubernetes cluster exposes the Kubernetes API for interacting with the cluster?",
    "",
    "The API server component of a Kubernetes cluster exposes the Kubernetes API for interacting with the cluster.",
  ],
  [
    "82274e4e-07f6-415c-96c3-71691462f91f",
    "Which version of Kubernetes introduced the Container Runtime Interface (CRI)?",
    "",
    "Kubernetes version 1.5 introduced the Container Runtime Interface (CRI).",
  ],
  [
    "1aaace36-01f4-4202-915d-98a0343a76f8",
    "What do Kubernetes services use to target specific pods?",
    "",
    "Kubernetes services use labels to target specific pods.",
  ],
  [
    "9e6dbb44-cba1-4792-93bd-2a921b1bf4f0",
    "Which component is responsible for assigning workloads to nodes in a Kubernetes cluster?",
    "",
    "The Scheduler component is responsible for assigning workloads to nodes in a Kubernetes cluster.",
  ],
  [
    "2f7c25fe-dfeb-4090-b702-7757672ea0d8",
    "What is the main difference between traditional monitoring and monitoring Kubernetes?",
    "",
    "The main difference between traditional monitoring and monitoring Kubernetes is the additional layers of abstraction.",
  ],
  [
    "45320c95-cec7-470d-a8c6-5fc60d65ed94",
    "What does etcd store in a Kubernetes cluster?",
    "",
    "Etcd stores configuration data and cluster state in a Kubernetes cluster.",
  ],
  [
    "6e7dc1ce-4969-4bab-baca-b7ba90dbdc15",
    "What does a Kubernetes service primarily enable?",
    "",
    "A Kubernetes service primarily enables discovering and communicating with pods.",
  ],
  [
    "7e064dd5-78be-4e0f-96ec-766673d668f3",
    "What is the default container runtime for Kubernetes?",
    "",
    "The default container runtime for Kubernetes is Docker.",
  ],
  [
    "8fff0083-6370-4be4-abbb-93c099ba39a4",
    "Which Kubernetes component watches for newly created resources and reconciles desired state with actual state?",
    "",
    "The Controller Manager component in Kubernetes watches for newly created resources and reconciles desired state with actual state.",
  ],
  [
    "82dc289c-376b-4ecc-bb05-88be9c247fff",
    "What is the role of namespaces in Kubernetes?",
    "",
    "Namespaces in Kubernetes are used for isolating and organizing resources.",
  ],
  [
    "ce7dd422-110a-4b28-8e62-2221bf3cb237",
    "What is the primary function of a Kubernetes ingress?",
    "",
    "The primary function of a Kubernetes ingress is routing external traffic to services.",
  ],
  [
    "0373c403-889c-459b-b3e0-72945c015658",
    "What type of software is Kubernetes?",
    "",
    "Kubernetes is a container orchestration platform.",
  ],
  [
    "0774fcc4-9243-414a-836d-44ce3acb83a0",
    "Which command-line tool is used to interact with a Kubernetes cluster?",
    "",
    "Kubectl is the command-line tool used to interact with a Kubernetes cluster.",
  ],
  [
    "91086fe8-9354-4553-b73a-97f99485f481",
    "What does a Kubernetes node represent?",
    "",
    "A Kubernetes node represents a worker machine.",
  ],
  [
    "86b5723a-fa9b-48d7-947f-979cf5aa4510",
    "Which type of Kubernetes object is used to define a desired state for a deployment?",
    "",
    "A YAML object is used to define a desired state for a deployment in Kubernetes.",
  ],
  [
    "003a0c26-ae04-4424-b7ff-511cad218b1f",
    "In Kubernetes, what is the primary function of ConfigMaps?",
    "",
    "The primary function of ConfigMaps in Kubernetes is storing configuration data for pods.",
  ],
  [
    "a840aa28-0b74-4e63-8573-741e5b5ee9b0",
    "What is the primary role of a Kubernetes Persistent Volume (PV)?",
    "",
    "The primary role of a Kubernetes Persistent Volume (PV) is to provide storage for a pod.",
  ],
  [
    "a4d92410-5357-4cf8-a486-d423fa1758ba",
    "Which Kubernetes component is responsible for ensuring the cluster's desired state is maintained?",
    "",
    "The Controller Manager component in Kubernetes is responsible for ensuring the cluster's desired state is maintained.",
  ],
  [
    "79e1e18f-5e76-4963-a159-11bde58e1da5",
    "What is a Kubernetes custom resource definition (CRD)?",
    "",
    "A Kubernetes custom resource definition (CRD) is a user-defined extension of the Kubernetes API.",
  ],
  [
    "91112e21-1b27-4644-a863-0bd9de3402c2",
    "What does a Kubernetes StatefulSet primarily manage?",
    "",
    "A Kubernetes StatefulSet primarily manages stateful applications.",
  ],
  [
    "44e22dc1-dce1-41f4-8441-94641c3c9d10",
    "Which component of a Kubernetes cluster is responsible for distributing and synchronizing configuration data across the control plane?",
    "",
    "The etcd component of a Kubernetes cluster is responsible for distributing and synchronizing configuration data across the control plane.",
  ],
  [
    "86bfcbb5-71a4-4d5f-a918-64bf53411596",
    "What is the main purpose of a Kubernetes DaemonSet?",
    "",
    "The main purpose of a Kubernetes DaemonSet is to run a pod on every node in the cluster.",
  ],
  [
    "d71b7306-b8b9-4626-92bf-b06979c47a07",
    "What type of monitoring is typically used to collect data about Kubernetes cluster components?",
    "",
    "White-box monitoring is typically used to collect data about Kubernetes cluster components.",
  ],
  [
    "c3cd9662-bcde-482d-bc19-5a7a1666959c",
    "Which Kubernetes feature allows you to automatically scale the number of replicas based on CPU utilization?",
    "",
    "The Horizontal Pod Autoscaler feature in Kubernetes allows you to automatically scale the number of replicas based on CPU utilization.",
  ],
  [
    "455125b1-066c-4088-b92e-b5bf65c3d2a4",
    "Which of the following is not a native Kubernetes object?",
    "",
    "Custom Resource Definition (CRD) is not a native Kubernetes     object, it is a user-defined extension of the Kubernetes API.",
  ],
  [
    "2bf09657-7162-4797-a6e9-18a3dc7cdb25",
    "Which of the following is a valid resource type in Kubernetes?",
    "",
    "Secret is a valid resource type in Kubernetes.",
  ],
  [
    "4ff5e703-b4ec-4476-bcf2-d37551f47ab2",
    "What is the primary purpose of a Kubernetes ReplicaSet?",
    "",
    "The primary purpose of a Kubernetes ReplicaSet is to maintain a specified number of replicas of a pod.",
  ],
  [
    "55de50a0-5d3c-4275-88e7-e6512d8bdfff",
    "Which of the following Kubernetes components is responsible for allocating a unique IP address to each pod?",
    "",
    "The Container Networking Interface (CNI) in Kubernetes is responsible for allocating a unique IP address to each pod.",
  ],
  [
    "93f86f2c-77d0-41b8-99a7-8df1e4e73d74",
    "Which of the following is a valid Kubernetes storage solution?",
    "",
    "NFS is a valid Kubernetes storage solution.",
  ],
  [
    "aa93579c-08c7-4c5b-bd9c-535450480332",
    "What type of Kubernetes object is used to group and version RESTful API resources?",
    "",
    "API group is a Kubernetes object used to group and version RESTful API resources.",
  ],
  [
    "45288abd-2085-45aa-819c-bff8381f31e5",
    "Which Kubernetes object is used to manage a group of identical pods?",
    "",
    "Deployment is a Kubernetes object used to manage a group of identical pods.",
  ],
  [
    "a3baea9c-b4e0-4be8-a979-3a7612db46ee",
    "Which of the following is not a valid Kubernetes container runtime?",
    "",
    "LXC is not a valid Kubernetes container runtime.",
  ],
  [
    "ea7b8aa5-229c-4d32-ae34-bbc46ceb903b",
    "What is the primary purpose of a Kubernetes Job?",
    "",
    "The primary purpose of a Kubernetes Job is to run a short-lived, one-time task.",
  ],
  [
    "0f217903-ff2c-459d-a744-67aa4653c353",
    "What is a valid use case for a Kubernetes CronJob?",
    "",
    "A valid use case for a Kubernetes CronJob is running a scheduled task.",
  ],
  [
    "2b8daedf-b764-4abe-8747-64b1a8260a3b",
    "Which of the following Kubernetes components stores the configuration data for the cluster?",
    "",
    "The etcd component in Kubernetes stores the configuration data for the cluster.",
  ],
  [
    "c9ccd145-0dee-41d3-acd5-b6c5da06a31f",
    "What is the purpose of a Kubernetes Ingress?",
    "",
    "The purpose of a Kubernetes Ingress is to manage external access to services within a cluster.",
  ],
  [
    "dcea9c38-4b3b-4e12-8c27-4ce0ad6db0c5",
    "Which of the following is not a Kubernetes control plane component?",
    "",
    "kubelet is not a Kubernetes control plane component.",
  ],
  [
    "c72d17c0-0e1d-4ec1-8c69-d85f80f8d0bb",
    "Which of the following Kubernetes components is responsible for watching for newly created pods and assigning them to nodes?",
    "",
    "The Scheduler component in Kubernetes is responsible for watching for newly created pods and assigning them to nodes.",
  ],
  [
    "a2047e46-9260-47eb-b549-eb7af757bd31",
    "What type of Kubernetes object is used to define a desired state for a set of resources?",
    "",
    "A Custom Resource Definition (CRD) is a Kubernetes object used to define a desired state for a set of resources.",
  ],
  [
    "6cad7d87-bd5e-4115-83a1-b522d67b1233",
    "Which of the following Kubernetes resources is used to manage the lifecycle of a stateful application?",
    "",
    "A StatefulSet is a Kubernetes resource used to manage the lifecycle of a stateful application.",
  ],
  [
    "c3f3302b-084c-42b1-b6d1-f34f69c9e44f",
    "What is the primary purpose of a Kubernetes ConfigMap?",
    "",
    "The primary purpose of a Kubernetes ConfigMap is to store non-sensitive configuration data.",
  ],
  [
    "2600c620-6670-4cc8-806a-480929e81dab",
    "Which of the following is a valid Kubernetes volume plugin?",
    "",
    "GlusterFS is a valid Kubernetes volume plugin.",
  ],
  [
    "13bf5e6c-0fee-43f1-9e75-ce9a2afa40d3",
    "What is the primary purpose of a Kubernetes Service?",
    "",
    "The primary purpose of a Kubernetes Service is to expose applications running on a set of pods as a network service.",
  ],
  [
    "251b9c15-5ad2-4999-937b-8e77ba9c15eb",
    "What type of Kubernetes object is used to automate deployment, scaling, and management of containerized applications?",
    "",
    "Deployment is a Kubernetes object used to automate deployment, scaling, and management of containerized applications.",
  ],
  [
    "5364ad4f-491a-4462-bbc2-ef73ec151057",
    "Which of the following is not a valid Kubernetes object?",
    "",
    "FileSet is not a valid Kubernetes object.",
  ],
  [
    "80e16639-0da2-41dc-a9b3-cb684d92603d",
    "What type of Kubernetes object is used to run a stateless application?",
    "",
    "A Deployment is a Kubernetes object used to run a stateless application.",
  ],
  [
    "2fd3dd36-3761-4c08-9959-eda7de6ea02b",
    "Which Kubernetes component runs on each node and ensures containers are running in a pod?",
    "",
    "The kubelet component in Kubernetes runs on each node and ensures containers are running in a pod.",
  ],
  [
    "cb8c4c5c-10d3-4bf1-8698-c3cdd992e023",
    "What is the purpose of a Kubernetes PersistentVolumeClaim?",
    "",
    "The purpose of a Kubernetes PersistentVolumeClaim is to request storage from a PersistentVolume.",
  ],
  [
    "03368787-65f1-4574-931d-f9b14428c39e",
    "Which of the following is a valid Kubernetes storage class provisioner?",
    "",
    "kubernetes.io/aws-ebs is a valid Kubernetes storage class provisioner.",
  ],
  [
    "5869e151-1670-41bb-890f-6e42eed500bc",
    "What is the primary purpose of a Kubernetes Secret?",
    "",
    "The primary purpose of a Kubernetes Secret is to store sensitive data.",
  ],
  [
    "bca09a3d-ade5-448b-97e5-5bd8d861674d",
    "Which Kubernetes component exposes the Kubernetes API?",
    "",
    "The kube-apiserver component in Kubernetes exposes the Kubernetes API.",
  ],
  [
    "73beb0a8-853d-4437-ac8c-27c1e6c1ed10",
    "Which of the following is not a core Kubernetes resource?",
    "",
    "API group is not a core Kubernetes resource.",
  ],
];
