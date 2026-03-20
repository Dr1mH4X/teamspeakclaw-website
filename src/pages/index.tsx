import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';

import Translate, {translate} from '@docusaurus/Translate';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
            <Translate id="homepage.tagline">
                LLM-powered TeamSpeak Bot
            </Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            <Translate id="homepage.getStarted">
                快速开始 - 5min ⏱️
            </Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
        <div className="container" style={{padding: '4rem 0', textAlign: 'center'}}>
          <h2>
            <Translate id="homepage.featureTitle">
              为什么选择 TeamSpeakClaw?
            </Translate>
          </h2>
          <div className="row">
             <div className="col col--4">
                <h3>🧠 <Translate>自然语言交互</Translate></h3>
                <p><Translate>直接用语音命令控制服务器，无需记忆指令。</Translate></p>
             </div>
             <div className="col col--4">
                <h3>🛡️ <Translate>细粒度权限</Translate></h3>
                <p><Translate>灵活的 RBAC 权限系统，安全可控。</Translate></p>
             </div>
             <div className="col col--4">
                <h3>🎵 <Translate>音乐播放</Translate></h3>
                <p><Translate>支持网易云音乐点歌、切歌。</Translate></p>
             </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
