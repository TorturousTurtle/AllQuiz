export const k8spart1Arr = [
  [
    "What is Kubernetes?",
    ["A container orchestration platform", "t"],
    ["A container runtime", "f"],
    ["A container registry", "f"],
    ["A container platform-as-a-service", "f"],
    "Kubernetes is a container orchestration platform that automates the scheduling, scaling, and maintenance of containerized applications.",
  ],
  [
    "What is a pod in Kubernetes?",
    [
      "The smallest deployable unit that can be created, scheduled, and managed with Kubernetes",
      "t",
    ],
    ["A container runtime", "f"],
    ["A container registry", "f"],
    ["A container platform-as-a-service", "f"],
    "A pod is the smallest deployable unit in Kubernetes that can be created, scheduled, and managed. It contains one or more containers that share the same network namespace.",
  ],
  [
    "What is a Kubernetes controller?",
    [
      "A component responsible for keeping the current state of the cluster in line with the desired state",
      "t",
    ],
    ["A container runtime", "f"],
    ["A container registry", "f"],
    ["A container platform-as-a-service", "f"],
    "A Kubernetes controller is a component responsible for keeping the current state of the cluster in line with the desired state. Controllers watch the API server for any changes to cluster resources and make changes of their own to keep the actual state of the cluster in line with the desired state.",
  ],
  [
    "What is a Kubernetes service?",
    [
      "An object that provides a stable IP address to the external world and allows communication between components",
      "t",
    ],
    ["A container runtime", "f"],
    ["A container registry", "f"],
    ["A container platform-as-a-service", "f"],
    "A Kubernetes service is an object that provides a stable IP address to the external world and allows communication between components. Services act as an endpoint for a set of pods by exposing a stable IP address to the external world and hiding the complexity of the cluster’s dynamic pod scheduling on the backend.",
  ],
  [
    "What is container orchestration?",
    ["The automated management of containerized applications", "t"],
    ["The process of building container images", "f"],
    ["The automated deployment of containerized applications", "f"],
    ["The process of scaling containerized applications", "f"],
    "Container orchestration is the automated management of containerized applications, including scheduling, scaling, and resource allocation.",
  ],
  [
    "What is a container runtime?",
    ["The software responsible for running containers on a host", "t"],
    ["The process of building container images", "f"],
    ["The automated management of containerized applications", "f"],
    ["The process of scaling containerized applications", "f"],
    "A container runtime is the software responsible for running containers on a host, such as Docker or containerd.",
  ],
  [
    "What is containerization?",
    [
      "The process of encapsulating an application and its dependencies in a container",
      "t",
    ],
    ["The process of building container images", "f"],
    ["The automated management of containerized applications", "f"],
    ["The process of scaling containerized applications", "f"],
    "Containerization is the process of encapsulating an application and its dependencies in a container, which can then be deployed and run in any environment that supports containerization.",
  ],
  [
    "What is a Kubernetes node?",
    ["A virtual or physical machine that runs containers", "t"],
    ["A container runtime", "f"],
    ["A container registry", "f"],
    ["A container platform-as-a-service", "f"],
    "A Kubernetes node is a virtual or physical machine that runs containers.",
  ],
  [
    "What is Kubernetes often abbreviated as?",
    ["K8s", "t"],
    ["Kube", "f"],
    ["Ku8", "f"],
    ["Kub", "f"],
    "Kubernetes is often abbreviated as K8s.",
  ],
  [
    "Kubernetes was first open sourced by which company in 2014?",
    ["Google", "t"],
    ["Microsoft", "f"],
    ["Amazon", "f"],
    ["IBM", "f"],
    "Kubernetes was first open sourced by Google in 2014.",
  ],
  [
    "What does Kubernetes automate in container infrastructure?",
    ["Scheduling, scaling, and maintenance", "t"],
    ["Storage management", "f"],
    ["Performance tuning", "f"],
    ["Security and encryption", "f"],
    "Kubernetes automates scheduling, scaling, and maintenance of containers in container infrastructure.",
  ],
  [
    "Which Kubernetes component is responsible for creating and destroying pods dynamically?",
    ["Replica set", "t"],
    ["Deployment", "f"],
    ["Service", "f"],
    ["Namespace", "f"],
    "A replica set in Kubernetes is responsible for creating and destroying pods dynamically.",
  ],
  [
    "What is the smallest deployable unit that can be created, scheduled, and managed with Kubernetes?",
    ["Pod", "t"],
    ["Container", "f"],
    ["Deployment", "f"],
    ["Node", "f"],
    "The smallest deployable unit that can be created, scheduled, and managed with Kubernetes is a pod.",
  ],
  [
    "What is a higher-level controller that manages replica sets in Kubernetes?",
    ["Deployment", "t"],
    ["Replica set", "f"],
    ["Service", "f"],
    ["Namespace", "f"],
    "A Deployment is a higher-level controller that manages replica sets in Kubernetes.",
  ],
  [
    "Which component of a Kubernetes cluster exposes the Kubernetes API for interacting with the cluster?",
    ["API server", "t"],
    ["Controller Manager", "f"],
    ["Scheduler", "f"],
    ["etcd", "f"],
    "The API server component of a Kubernetes cluster exposes the Kubernetes API for interacting with the cluster.",
  ],
  [
    "Which version of Kubernetes introduced the Container Runtime Interface (CRI)?",
    ["1.5", "t"],
    ["1.0", "f"],
    ["1.8", "f"],
    ["1.10", "f"],
    "Kubernetes version 1.5 introduced the Container Runtime Interface (CRI).",
  ],
  [
    "What do Kubernetes services use to target specific pods?",
    ["Labels", "t"],
    ["Selectors", "f"],
    ["Endpoints", "f"],
    ["Namespaces", "f"],
    "Kubernetes services use labels to target specific pods.",
  ],
  [
    "Which component is responsible for assigning workloads to nodes in a Kubernetes cluster?",
    ["Scheduler", "t"],
    ["API server", "f"],
    ["Controller Manager", "f"],
    ["etcd", "f"],
    "The Scheduler component is responsible for assigning workloads to nodes in a Kubernetes cluster.",
  ],
  [
    "What is the main difference between traditional monitoring and monitoring Kubernetes?",
    ["Additional layers of abstraction", "t"],
    ["Different types of resources", "f"],
    ["Increased complexity", "f"],
    ["Different tools", "f"],
    "The main difference between traditional monitoring and monitoring Kubernetes is the additional layers of abstraction.",
  ],
  [
    "What does etcd store in a Kubernetes cluster?",
    ["Configuration data and cluster state", "t"],
    ["Pod logs", "f"],
    ["Service metrics", "f"],
    ["Container images", "f"],
    "Etcd stores configuration data and cluster state in a Kubernetes cluster.",
  ],
  [
    "What does a Kubernetes service primarily enable?",
    ["Discovering and communicating with pods", "t"],
    ["Scaling and updating deployments", "f"],
    ["Creating and destroying pods", "f"],
    ["Assigning workloads to nodes", "f"],
    "A Kubernetes service primarily enables discovering and communicating with pods.",
  ],
  [
    "What is the default container runtime for Kubernetes?",
    ["Docker", "t"],
    ["containerd", "f"],
    ["CRI-O", "f"],
    ["rkt", "f"],
    "The default container runtime for Kubernetes is Docker.",
  ],
  [
    "Which Kubernetes component watches for newly created resources and reconciles desired state with actual state?",
    ["Controller Manager", "t"],
    ["API server", "f"],
    ["Scheduler", "f"],
    ["etcd", "f"],
    "The Controller Manager component in Kubernetes watches for newly created resources and reconciles desired state with actual state.",
  ],
  [
    "What is the role of namespaces in Kubernetes?",
    ["Isolating and organizing resources", "t"],
    ["Scaling and updating deployments", "f"],
    ["Creating and destroying pods", "f"],
    ["Assigning workloads to nodes", "f"],
    "Namespaces in Kubernetes are used for isolating and organizing resources.",
  ],
  [
    "What is the primary function of a Kubernetes ingress?",
    ["Routing external traffic to services", "t"],
    ["Creating and destroying pods", "f"],
    ["Assigning workloads to nodes", "f"],
    ["Scaling and updating deployments", "f"],
    "The primary function of a Kubernetes ingress is routing external traffic to services.",
  ],
  [
    "What type of software is Kubernetes?",
    ["Container orchestration platform", "t"],
    ["Configuration management tool", "f"],
    ["Virtualization platform", "f"],
    ["Cloud infrastructure platform", "f"],
    "Kubernetes is a container orchestration platform.",
  ],
  [
    "Which command-line tool is used to interact with a Kubernetes cluster?",
    ["kubectl", "t"],
    ["kube", "f"],
    ["kubecmd", "f"],
    ["kubemanager", "f"],
    "Kubectl is the command-line tool used to interact with a Kubernetes cluster.",
  ],
  [
    "What does a Kubernetes node represent?",
    ["A worker machine", "t"],
    ["A container", "f"],
    ["A pod", "f"],
    ["A service", "f"],
    "A Kubernetes node represents a worker machine.",
  ],
  [
    "Which type of Kubernetes object is used to define a desired state for a deployment?",
    ["YAML", "t"],
    ["JSON", "f"],
    ["XML", "f"],
    ["TOML", "f"],
    "A YAML object is used to define a desired state for a deployment in Kubernetes.",
  ],
  [
    "In Kubernetes, what is the primary function of ConfigMaps?",
    ["Storing configuration data for pods", "t"],
    ["Creating and destroying pods", "f"],
    ["Assigning workloads to nodes", "f"],
    ["Scaling and updating deployments", "f"],
    "The primary function of ConfigMaps in Kubernetes is storing configuration data for pods.",
  ],
  [
    "What is the primary role of a Kubernetes Persistent Volume (PV)?",
    ["Providing storage for a pod", "t"],
    ["Creating and destroying pods", "f"],
    ["Scaling and updating deployments", "f"],
    ["Assigning workloads to nodes", "f"],
    "The primary role of a Kubernetes Persistent Volume (PV) is to provide storage for a pod.",
  ],
  [
    "Which of the following is NOT a core component of a Kubernetes control plane?",
    ["Ingress", "t"],
    ["API server", "f"],
    ["etcd", "f"],
    ["Controller Manager", "f"],
    "Ingress is not a core component of a Kubernetes control plane.",
  ],
  [
    "Which Kubernetes component is responsible for ensuring the cluster's desired state is maintained?",
    ["Controller Manager", "t"],
    ["API server", "f"],
    ["Scheduler", "f"],
    ["etcd", "f"],
    "The Controller Manager component in Kubernetes is responsible for ensuring the cluster's desired state is maintained.",
  ],
  [
    "What is a Kubernetes custom resource definition (CRD)?",
    ["A user-defined extension of the Kubernetes API", "t"],
    ["A predefined Kubernetes object", "f"],
    ["A configuration file for a pod", "f"],
    ["A storage volume for a pod", "f"],
    "A Kubernetes custom resource definition (CRD) is a user-defined extension of the Kubernetes API.",
  ],
  [
    "What does a Kubernetes StatefulSet primarily manage?",
    ["Stateful applications", "t"],
    ["Stateless applications", "f"],
    ["Configuration data", "f"],
    ["Persistent storage", "f"],
    "A Kubernetes StatefulSet primarily manages stateful applications.",
  ],
  [
    "Which component of a Kubernetes cluster is responsible for distributing and synchronizing configuration data across the control plane?",
    ["etcd", "t"],
    ["API server", "f"],
    ["Controller Manager", "f"],
    ["Scheduler", "f"],
    "The etcd component of a Kubernetes cluster is responsible for distributing and synchronizing configuration data across the control plane.",
  ],
  [
    "What is the main purpose of a Kubernetes DaemonSet?",
    ["Running a pod on every node in the cluster", "t"],
    ["Scaling and updating deployments", "f"],
    ["Creating and destroying pods", "f"],
    ["Assigning workloads to nodes", "f"],
    "The main purpose of a Kubernetes DaemonSet is to run a pod on every node in the cluster.",
  ],
  [
    "What type of monitoring is typically used to collect data about Kubernetes cluster components?",
    ["White-box monitoring", "t"],
    ["Black-box monitoring", "f"],
    ["Grey-box monitoring", "f"],
    ["Red-box monitoring", "f"],
    "White-box monitoring is typically used to collect data about Kubernetes cluster components.",
  ],
  [
    "Which Kubernetes feature allows you to automatically scale the number of replicas based on CPU utilization?",
    ["Horizontal Pod Autoscaler", "t"],
    ["Vertical Pod Autoscaler", "f"],
    ["Cluster Autoscaler", "f"],
    ["Node Autoscaler", "f"],
    "The Horizontal Pod Autoscaler feature in Kubernetes allows you to automatically scale the number of replicas based on CPU utilization.",
  ],
  [
    "Which of the following is not a native Kubernetes object?",
    ["Custom Resource Definition (CRD)", "t"],
    ["Deployment", "f"],
    ["Service", "f"],
    ["ConfigMap", "f"],
    "Custom Resource Definition (CRD) is not a native Kubernetes     object, it is a user-defined extension of the Kubernetes API.",
  ],
  [
    "Which of the following is a valid resource type in Kubernetes?",
    ["Secret", "t"],
    ["SecretManager", "f"],
    ["Credentials", "f"],
    ["KeyVault", "f"],
    "Secret is a valid resource type in Kubernetes.",
  ],
  [
    "What is the primary purpose of a Kubernetes ReplicaSet?",
    ["Maintaining a specified number of replicas of a pod", "t"],
    ["Scaling and updating deployments", "f"],
    ["Creating and destroying pods", "f"],
    ["Assigning workloads to nodes", "f"],
    "The primary purpose of a Kubernetes ReplicaSet is to maintain a specified number of replicas of a pod.",
  ],
  [
    "Which of the following Kubernetes components is responsible for allocating a unique IP address to each pod?",
    ["Container Networking Interface (CNI)", "t"],
    ["API server", "f"],
    ["Scheduler", "f"],
    ["etcd", "f"],
    "The Container Networking Interface (CNI) in Kubernetes is responsible for allocating a unique IP address to each pod.",
  ],
  [
    "Which of the following is a valid Kubernetes storage solution?",
    ["NFS", "t"],
    ["SMB", "f"],
    ["FTP", "f"],
    ["SFTP", "f"],
    "NFS is a valid Kubernetes storage solution.",
  ],
  [
    "What type of Kubernetes object is used to group and version RESTful API resources?",
    ["API group", "t"],
    ["API version", "f"],
    ["API resource", "f"],
    ["API namespace", "f"],
    "API group is a Kubernetes object used to group and version RESTful API resources.",
  ],
  [
    "Which Kubernetes object is used to manage a group of identical pods?",
    ["Deployment", "t"],
    ["ReplicaSet", "f"],
    ["StatefulSet", "f"],
    ["DaemonSet", "f"],
    "Deployment is a Kubernetes object used to manage a group of identical pods.",
  ],
  [
    "Which of the following is not a valid Kubernetes container runtime?",
    ["LXC", "t"],
    ["Docker", "f"],
    ["containerd", "f"],
    ["CRI-O", "f"],
    "LXC is not a valid Kubernetes container runtime.",
  ],
  [
    "What is the primary purpose of a Kubernetes Job?",
    ["Running a short-lived, one-time task", "t"],
    ["Running a long-running, persistent task", "f"],
    ["Scaling and updating deployments", "f"],
    ["Creating and destroying pods", "f"],
    "The primary purpose of a Kubernetes Job is to run a short-lived, one-time task.",
  ],
  [
    "What is a valid use case for a Kubernetes CronJob?",
    ["Running a scheduled task", "t"],
    ["Running a long-running, persistent task", "f"],
    ["Scaling and updating deployments", "f"],
    ["Creating and destroying pods", "f"],
    "A valid use case for a Kubernetes CronJob is running a scheduled task.",
  ],
  [
    "Which of the following Kubernetes components stores the configuration data for the cluster?",
    ["etcd", "t"],
    ["API server", "f"],
    ["kube-controller-manager", "f"],
    ["kube-scheduler", "f"],
    "The etcd component in Kubernetes stores the configuration data for the cluster.",
  ],
  [
    "What is the purpose of a Kubernetes Ingress?",
    ["Managing external access to services within a cluster", "t"],
    ["Managing internal access to services within a cluster", "f"],
    ["Assigning workloads to nodes", "f"],
    ["Scaling and updating deployments", "f"],
    "The purpose of a Kubernetes Ingress is to manage external access to services within a cluster.",
  ],
  [
    "Which of the following is not a Kubernetes control plane component?",
    ["kubelet", "t"],
    ["kube-apiserver", "f"],
    ["etcd", "f"],
    ["kube-controller-manager", "f"],
    "kubelet is not a Kubernetes control plane component.",
  ],
  [
    "Which of the following Kubernetes components is responsible for watching for newly created pods and assigning them to nodes?",
    ["Scheduler", "t"],
    ["Controller Manager", "f"],
    ["API Server", "f"],
    ["kubelet", "f"],
    "The Scheduler component in Kubernetes is responsible for watching for newly created pods and assigning them to nodes.",
  ],
  [
    "What type of Kubernetes object is used to define a desired state for a set of resources?",
    ["Custom Resource Definition (CRD)", "t"],
    ["API group", "f"],
    ["API version", "f"],
    ["API namespace", "f"],
    "A Custom Resource Definition (CRD) is a Kubernetes object used to define a desired state for a set of resources.",
  ],
  [
    "Which of the following Kubernetes resources is used to manage the lifecycle of a stateful application?",
    ["StatefulSet", "t"],
    ["Deployment", "f"],
    ["ReplicaSet", "f"],
    ["DaemonSet", "f"],
    "A StatefulSet is a Kubernetes resource used to manage the lifecycle of a stateful application.",
  ],
  [
    "What is the primary purpose of a Kubernetes ConfigMap?",
    ["Storing non-sensitive configuration data", "t"],
    ["Storing sensitive configuration data", "f"],
    ["Scaling and updating deployments", "f"],
    ["Creating and destroying pods", "f"],
    "The primary purpose of a Kubernetes ConfigMap is to store non-sensitive configuration data.",
  ],
  [
    "Which of the following is a valid Kubernetes volume plugin?",
    ["GlusterFS", "t"],
    ["CIFS", "f"],
    ["FTP", "f"],
    ["SFTP", "f"],
    "GlusterFS is a valid Kubernetes volume plugin.",
  ],
  [
    "What is the primary purpose of a Kubernetes Service?",
    [
      "Exposing applications running on a set of pods as a network service",
      "t",
    ],
    ["Creating and destroying pods", "f"],
    ["Scaling and updating deployments", "f"],
    ["Assigning workloads to nodes", "f"],
    "The primary purpose of a Kubernetes Service is to expose applications running on a set of pods as a network service.",
  ],
  [
    "What type of Kubernetes object is used to automate deployment, scaling, and management of containerized applications?",
    ["Deployment", "t"],
    ["ReplicaSet", "f"],
    ["StatefulSet", "f"],
    ["DaemonSet", "f"],
    "Deployment is a Kubernetes object used to automate deployment, scaling, and management of containerized applications.",
  ],
  [
    "Which of the following is not a valid Kubernetes object?",
    ["CronJob", "f"],
    ["StatefulSet", "f"],
    ["ReplicaSet", "f"],
    ["FileSet", "t"],
    "FileSet is not a valid Kubernetes object.",
  ],
  [
    "What type of Kubernetes object is used to run a stateless application?",
    ["Deployment", "t"],
    ["StatefulSet", "f"],
    ["DaemonSet", "f"],
    ["ConfigMap", "f"],
    "A Deployment is a Kubernetes object used to run a stateless application.",
  ],
  [
    "Which Kubernetes component runs on each node and ensures containers are running in a pod?",
    ["kubelet", "t"],
    ["kube-apiserver", "f"],
    ["kube-controller-manager", "f"],
    ["kube-scheduler", "f"],
    "The kubelet component in Kubernetes runs on each node and ensures containers are running in a pod.",
  ],
  [
    "What is the purpose of a Kubernetes PersistentVolumeClaim?",
    ["Requesting storage from a PersistentVolume", "t"],
    ["Creating a PersistentVolume", "f"],
    ["Scaling and updating deployments", "f"],
    ["Creating and destroying pods", "f"],
    "The purpose of a Kubernetes PersistentVolumeClaim is to request storage from a PersistentVolume.",
  ],
  [
    "Which of the following is a valid Kubernetes storage class provisioner?",
    ["kubernetes.io/aws-ebs", "t"],
    ["kubernetes.io/ftp", "f"],
    ["kubernetes.io/sftp", "f"],
    ["kubernetes.io/nfs", "f"],
    "kubernetes.io/aws-ebs is a valid Kubernetes storage class provisioner.",
  ],
  [
    "What is the primary purpose of a Kubernetes Secret?",
    ["Storing sensitive data", "t"],
    ["Storing non-sensitive data", "f"],
    ["Scaling and updating deployments", "f"],
    ["Creating and destroying pods", "f"],
    "The primary purpose of a Kubernetes Secret is to store sensitive data.",
  ],
  [
    "Which Kubernetes component exposes the Kubernetes API?",
    ["kube-apiserver", "t"],
    ["kubelet", "f"],
    ["kube-controller-manager", "f"],
    ["kube-scheduler", "f"],
    "The kube-apiserver component in Kubernetes exposes the Kubernetes API.",
  ],
  [
    "Which of the following is not a core Kubernetes resource?",
    ["Ingress", "f"],
    ["Secret", "f"],
    ["ConfigMap", "f"],
    ["API group", "t"],
    "API group is not a core Kubernetes resource.",
  ],
];
