import { Project, Experience, SkillGroup, Education, Certificate } from './types';

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Cloud Platforms",
    skills: ["AWS (EKS, ECS, Lambda, s3, etc.)", "Azure (AKS, Azure Functions, Azure SQL, etc.)", "GCP (GKE, Cloud Run, BigQuery, etc.)"]
  },
  {
    category: "Containerization & Orchestration",
    skills: ["Docker", "Kubernetes (EKS, AKS, GKE)", "Helm", "ArgoCD", "GitOps"]
  },
  {
    category: "Infrastructure as Code",
    skills: ["Terraform", "Terragrunt", "Ansible"]
  },
  {
    category: "CI/CD & Automation",
    skills: ["Jenkins", "GitHub Actions", "GitLab CI/CD", "CircleCI"]
  },
  {
    category: "Monitoring & Observability",
    skills: ["Prometheus", "Grafana", "ELK Stack", "Datadog", "Loki", "FluentD"]
  },
  {
    category: "DevSecOps & Security",
    skills: ["Snyk", "Trivy", "SonarQube", "Checkov", "Kyverno", "HashiCorp Vault", "AWS KMS"]
  },
  {
    category: "MLOps & Data Engineering",
    skills: ["MLflow", "Kubeflow", "Airflow", "DVC", "TFX", "Weights & Biases", "SageMaker"]
  },
  {
    category: "Languages & Frameworks",
    skills: ["Python", "Bash", "Go", "Java", "FastAPI", "Flask", "PyTorch", "TensorFlow"]
  }
];

export const CERTIFICATES: Certificate[] = [
  { name: "Azure DevOps Engineer Expert" },
  { name: "Google Professional Cloud DevOps Engineer" },
  { name: "AWS Certified DevOps Engineer – Professional" },
  { name: "AWS DevOps Expert" },
  { name: "Azure Administrator Associate" },
  { name: "AWS Certified SysOps Administrator – Associate" },
  { name: "GitHub Actions" }
];

export const EDUCATION: Education[] = [
  {
    degree: "Masters in Computer Application (MCA)",
    institution: "Bangalore, India",
    period: "Aug 2022 – Sep 2024"
  },
  {
    degree: "Bachelors in Information Technology (BSc-IT)",
    institution: "Mumbai, India",
    period: "Apr 2018 – May 2021"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Multi-Cloud Infrastructure Automation",
    description: "Architected and deployed highly available multi-cloud infrastructure (AWS, Azure, GCP), ensuring 99.99% uptime with scalable, cost-efficient solutions.",
    tech: ["Terraform", "Terragrunt", "AWS", "Azure", "GCP"],
    type: "DevOps"
  },
  {
    title: "End-to-End MLOps Implementation",
    description: "Automated model training, packaging, and deployment using MLflow, Kubeflow, DVC, and Airflow, improving team productivity by 50%.",
    tech: ["MLflow", "Kubeflow", "DVC", "Airflow"],
    type: "MLOps"
  },
  {
    title: "Zero-Downtime GitOps Workflow",
    description: "Implemented GitOps workflows with ArgoCD and Helm, reducing rollback incidents by 40% and enabling seamless production deployments.",
    tech: ["ArgoCD", "Helm", "Kubernetes", "GitOps"],
    type: "DevOps"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Cloud, DevOps & MLOps Engineer",
    company: "V2 Solutions",
    period: "Apr 2023 – Current",
    description: [
      "Architected highly available multi-cloud infrastructure across AWS, Azure, and GCP.",
      "Reduced release cycles from weekly to daily using automated CI/CD pipelines.",
      "Provisioned IaC using Terraform and Terragrunt across global cloud regions.",
      "Strengthened DevSecOps by achieving 100% audit compliance using Snyk and SonarQube."
    ]
  },
  {
    role: "Cloud, DevOps & MLOps Engineer",
    company: "SimSol Technologies and Services Private Limited",
    period: "Sep 2022 – Apr 2023",
    description: [
      "Led end-to-end MLOps implementation improving team productivity by 50%.",
      "Deployed production-grade ML models using SageMaker and TF Serving with sub-100ms latency.",
      "Designed streaming data pipelines using Kafka, AWS Glue, and Snowflake.",
      "Optimized ML infrastructure costs by 20% through auto-scaling and GPU utilization tuning."
    ]
  },
  {
    role: "DevOps Engineer",
    company: "VTECH VIBRANT",
    period: "May 2020 – Sep 2022",
    description: [
      "Optimized CI/CD pipelines reducing manual effort by 80% with Jenkins and CircleCI.",
      "Implemented blue-green and canary deployments on Kubernetes with zero downtime.",
      "Streamlined cluster management with GitOps, increasing release frequency by 3x.",
      "Built observability solutions reducing incident detection and resolution time by 50%."
    ]
  }
];
