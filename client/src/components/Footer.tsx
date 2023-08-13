import RCFooter from "rc-footer";
import 'rc-footer/assets/index.css';

export default function Footer() {
    return (
        <div>
            <div className="space" />
            <RCFooter
                columns={[
                {
                    title: '개발 스택',
                    items: [
                        {
                            title: 'MongoDB',
                            url: 'https://www.mongodb.com',
                            openExternal: true,
                            description: 'Database'
                        },
                        {
                            title: 'Express',
                            url: 'https://expressjs.com',
                            openExternal: true,
                            description: 'Web framework'
                        },
                        {
                            title: 'React',
                            url: 'https://react.dev',
                            openExternal: true,
                            description: 'JavaScript framework'
                        },
                        {
                            title: 'Node js',
                            url: 'https://nodejs.org',
                            openExternal: true,
                            description: 'JavaScript web server'
                        },
                    ],
                },
                {
                    title: '.',
                    items: [
                        {
                            title: 'Terraform',
                            url: 'https://www.terraform.io',
                            openExternal: true,
                            description: 'IaC'
                        },
                        {
                            title: 'Docker',
                            url: 'https://www.docker.com',
                            openExternal: true,
                            description: 'Container engine'
                        },
                        {
                            title: 'Helm',
                            url: 'https://helm.sh',
                            openExternal: true,
                            description: 'K8s Package manager',
                        },
                        {
                            title: 'Kubernetes',
                            url: 'https://kubernetes.io',
                            openExternal: true,
                            description: 'Container orchestration'
                        },
                    ],
                },
                {
                    title: '.',
                    items: [
                        {
                            title: 'Git',
                            url: 'https://git-scm.com',
                            openExternal: true,
                            description: 'Version control'
                        },
                        {
                            title: 'GitHub Action',
                            url: 'https://github.com/actions',
                            openExternal: true,
                            description: 'CI/CD'
                        },
                        {
                            title: 'Prometheus',
                            url: 'https://prometheus.io',
                            openExternal: true,
                            description: 'Monitoring',
                        },
                    ],
                },
                {
                    icon: (
                    <img
                        src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg"
                        alt="more products"
                    />
                    ),
                    title: '개발자',
                    items: [
                    {
                        icon: (
                        <img
                            src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg"
                            alt="yuque"
                        />
                        ),
                        title: '서찬솔',
                        url: 'https://www.linkedin.com/in/chansol-suh-b14444244/',
                        description: 'LinkedIn',
                        openExternal: true,
                    },
                    {
                        icon: (
                        <img
                            src="https://gw.alipayobjects.com/zos/rmsportal/uHocHZfNWZOdsRUonZNr.png"
                            alt="yuque"
                        />
                        ),
                        title: '김미소',
                        url: 'https://daisy-piccolo-396.notion.site/9ca79bb6918f47dd807ea61041039b43',
                        description: 'Notion',
                        openExternal: true,
                    },
                    ],
                },
                ]}
                bottom="© 2023 Chansol Suh and Miso Kim. All rights reserved."
            />
        </div>
      );
}