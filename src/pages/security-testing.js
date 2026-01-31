import React from 'react';
import * as styles from './security-testing.module.css';

import Layout from '../components/Layout/Layout';
import Banner from '../components/Banner';
import Container from '../components/Container';

const SecurityTestingPage = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        <Banner
          maxWidth={'650px'}
          name={`Security Testing with Gobuster`}
          bgImage={'/support.png'}
          color={'var(--standard-white)'}
          height={'350px'}
        />
        <Container>
          <div className={styles.section}>
            <span>Gobuster Installation & Usage</span>
            <div className={styles.subSection}>
              <h3>Installation</h3>
              <p>
                Gobuster is a powerful tool used for directory/file, DNS, and
                virtual host brute-forcing. To install gobuster, use the
                following command:
              </p>
              <pre>
                <code>go install github.com/OJ/gobuster/v3@latest</code>
              </pre>
              <p>
                This will install the latest version of gobuster using Go.
                Make sure you have Go installed on your system before running
                this command.
              </p>
            </div>

            <div className={styles.subSection}>
              <h3>Basic Directory Enumeration</h3>
              <p>
                Use gobuster to discover hidden directories and files on a web
                server. This is useful for finding potential security
                vulnerabilities or exposed endpoints.
              </p>
              <pre>
                <code>
                  gobuster dir -u https://example.com -w /path/to/wordlist.txt
                </code>
              </pre>
              <p>
                <strong>Parameters:</strong>
              </p>
              <ul>
                <li>
                  <code>dir</code> - Specifies directory/file enumeration mode
                </li>
                <li>
                  <code>-u</code> - Target URL to scan
                </li>
                <li>
                  <code>-w</code> - Path to wordlist file containing potential
                  directory/file names
                </li>
              </ul>
            </div>

            <div className={styles.subSection}>
              <h3>DNS Subdomain Enumeration</h3>
              <p>
                Discover subdomains of a target domain. This helps identify all
                the subdomains associated with a primary domain.
              </p>
              <pre>
                <code>
                  gobuster dns -d example.com -w /path/to/wordlist.txt
                </code>
              </pre>
              <p>
                <strong>Parameters:</strong>
              </p>
              <ul>
                <li>
                  <code>dns</code> - Specifies DNS enumeration mode
                </li>
                <li>
                  <code>-d</code> - Target domain to scan for subdomains
                </li>
                <li>
                  <code>-w</code> - Path to wordlist file containing potential
                  subdomain names
                </li>
              </ul>
            </div>

            <div className={styles.subSection}>
              <h3>Virtual Host Discovery</h3>
              <p>
                Find virtual hosts on a target server. Virtual hosts allow
                multiple websites to be hosted on the same server.
              </p>
              <pre>
                <code>
                  gobuster vhost -u https://example.com -w /path/to/wordlist.txt
                </code>
              </pre>
              <p>
                <strong>Parameters:</strong>
              </p>
              <ul>
                <li>
                  <code>vhost</code> - Specifies virtual host enumeration mode
                </li>
                <li>
                  <code>-u</code> - Target URL to scan
                </li>
                <li>
                  <code>-w</code> - Path to wordlist file containing potential
                  virtual host names
                </li>
              </ul>
            </div>

            <div className={styles.subSection}>
              <h3>S3 Bucket Enumeration</h3>
              <p>
                Discover publicly accessible Amazon S3 buckets. This can help
                identify potential data exposure risks.
              </p>
              <pre>
                <code>gobuster s3 -w /path/to/bucket-names.txt</code>
              </pre>
              <p>
                <strong>Parameters:</strong>
              </p>
              <ul>
                <li>
                  <code>s3</code> - Specifies Amazon S3 bucket enumeration mode
                </li>
                <li>
                  <code>-w</code> - Path to wordlist file containing potential
                  bucket names
                </li>
              </ul>
            </div>

            <div className={styles.subSection}>
              <h3>Best Practices</h3>
              <p>
                When using gobuster for security testing, keep these best
                practices in mind:
              </p>
              <ul>
                <li>
                  Always obtain proper authorization before testing any system
                  you don't own
                </li>
                <li>
                  Use rate limiting options to avoid overwhelming target servers
                </li>
                <li>
                  Choose appropriate wordlists based on your testing objectives
                </li>
                <li>
                  Document your findings and report any vulnerabilities
                  responsibly
                </li>
                <li>
                  Consider using additional flags like <code>-t</code> for
                  threads and <code>-o</code> for output files
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default SecurityTestingPage;
