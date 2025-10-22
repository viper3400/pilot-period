import React, {useEffect, useMemo, useState} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const CONSENT_STORAGE_KEY = 'pilot-period.posthog-consent';

let posthogSnippetInjected = false;

function readStoredConsent() {
  if (typeof window === 'undefined') {
    return null;
  }
  try {
    return window.localStorage.getItem(CONSENT_STORAGE_KEY);
  } catch (error) {
    return null;
  }
}

function writeStoredConsent(value) {
  if (typeof window === 'undefined') {
    return;
  }
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, value);
  } catch (error) {
    // ignore write failures (for example, if storage is unavailable)
  }
}

function injectPosthogSnippet({apiKey, apiHost, options}) {
  if (typeof document === 'undefined' || !apiKey) {
    return;
  }

  if (posthogSnippetInjected || document.getElementById('posthog-consent-init')) {
    if (typeof window !== 'undefined' && window.posthog?.opt_in_capturing) {
      window.posthog.opt_in_capturing();
    }
    return;
  }

  posthogSnippetInjected = true;

  const finalOptions = {
    api_host: apiHost || 'https://us.i.posthog.com',
    ...(options || {}),
  };

  if (finalOptions.api_host && !document.querySelector('link[data-posthog-preconnect="true"]')) {
    const preconnect = document.createElement('link');
    preconnect.rel = 'preconnect';
    preconnect.href = finalOptions.api_host;
    preconnect.setAttribute('data-posthog-preconnect', 'true');
    document.head.appendChild(preconnect);
  }

  const script = document.createElement('script');
  script.id = 'posthog-consent-init';
  script.innerHTML = `
    !function(t,e){var o,n,p,r;e.__SV||(window.posthog&&window.posthog.__loaded)||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init hi $r kr ui wr Er capture Ri calculateEventProperties Ir register register_once register_for_session unregister unregister_for_session Fr getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey displaySurvey canRenderSurvey canRenderSurveyAsync identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty Cr Tr createPersonProfile Or yr Mr opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing get_explicit_consent_status is_capturing clear_opt_in_out_capturing Pr debug L Rr getPageViewId captureTraceFeedback captureTraceMetric gr".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
    posthog.init(${JSON.stringify(apiKey)}, ${JSON.stringify(finalOptions)});
  `;
  document.head.appendChild(script);
}

const styles = {
  overlay: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
    zIndex: 1000,
  },
  banner: {
    maxWidth: '520px',
    backgroundColor: 'var(--ifm-background-surface-color)',
    borderRadius: '0.5rem',
    padding: '1.5rem',
    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.25)',
  },
  title: {
    marginTop: 0,
    marginBottom: '0.75rem',
    fontSize: '1.25rem',
  },
  text: {
    marginBottom: '1rem',
    lineHeight: 1.5,
  },
  actions: {
    display: 'flex',
    gap: '0.75rem',
    flexWrap: 'wrap',
  },
  primaryButton: {
    padding: '0.6rem 1.2rem',
    borderRadius: '0.4rem',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: 'var(--ifm-color-primary)',
    color: 'var(--ifm-font-color-base-inverse)',
    fontWeight: 600,
  },
  secondaryButton: {
    padding: '0.6rem 1.2rem',
    borderRadius: '0.4rem',
    border: '1px solid var(--ifm-toc-border-color)',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    color: 'var(--ifm-font-color-base)',
    fontWeight: 500,
  },
  manageButton: {
    position: 'fixed',
    bottom: '1rem',
    right: '1rem',
    padding: '0.5rem 1rem',
    borderRadius: '999px',
    border: '1px solid var(--ifm-toc-border-color)',
    backgroundColor: 'var(--ifm-background-surface-color)',
    cursor: 'pointer',
    fontSize: '0.875rem',
    zIndex: 999,
  },
};

export default function Root({children}) {
  const {siteConfig} = useDocusaurusContext();
  const posthog = siteConfig?.customFields?.posthog || {};
  const [consentChoice, setConsentChoice] = useState('unknown');
  const [showPrompt, setShowPrompt] = useState(false);

  const posthogOptions = useMemo(() => posthog.options || {}, [posthog.options]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const storedConsent = readStoredConsent();

    if (storedConsent === 'accepted') {
      setConsentChoice('accepted');
      setShowPrompt(false);
      injectPosthogSnippet({
        apiKey: posthog.apiKey,
        apiHost: posthog.apiHost,
        options: posthogOptions,
      });
    } else if (storedConsent === 'declined') {
      setConsentChoice('declined');
      setShowPrompt(false);
      if (window.posthog?.opt_out_capturing) {
        window.posthog.opt_out_capturing();
      }
    } else {
      setConsentChoice('unknown');
      setShowPrompt(true);
    }
  }, [posthog.apiKey, posthog.apiHost, posthogOptions]);

  const handleAccept = () => {
    writeStoredConsent('accepted');
    setConsentChoice('accepted');
    setShowPrompt(false);

    injectPosthogSnippet({
      apiKey: posthog.apiKey,
      apiHost: posthog.apiHost,
      options: posthogOptions,
    });

    if (typeof window !== 'undefined' && window.posthog?.opt_in_capturing) {
      window.posthog.opt_in_capturing();
    }
  };

  const handleDecline = () => {
    writeStoredConsent('declined');
    setConsentChoice('declined');
    setShowPrompt(false);

    if (typeof window !== 'undefined' && window.posthog?.opt_out_capturing) {
      window.posthog.opt_out_capturing();
    }
  };

  const handleManage = () => {
    setShowPrompt(true);
  };

  return (
    <>
      {children}
      {showPrompt && (
        <div style={styles.overlay} role="dialog" aria-modal="true" aria-labelledby="consent-title">
          <div style={styles.banner}>
            <h2 id="consent-title" style={styles.title}>Analytics consent</h2>
            <p style={styles.text}>
              We use PostHog analytics to understand how the site is used and to improve future content.
              If you agree, an anonymous identifier will be stored in your browser and we will capture usage data.
              You can change your preference at any time.
            </p>
            <div style={styles.actions}>
              <button type="button" style={styles.primaryButton} onClick={handleAccept}>
                Accept analytics
              </button>
              <button type="button" style={styles.secondaryButton} onClick={handleDecline}>
                Decline
              </button>
             {/*    
              <a href="/docs/about" style={{...styles.secondaryButton, display: 'inline-flex', alignItems: 'center', textDecoration: 'none'}}>
                Privacy details
              </a>
              */}
            </div>
          </div>
        </div>
      )}
      {consentChoice !== 'unknown' && !showPrompt && (
        <button type="button" style={styles.manageButton} onClick={handleManage}>
          Analytics settings
        </button>
      )}
    </>
  );
}
