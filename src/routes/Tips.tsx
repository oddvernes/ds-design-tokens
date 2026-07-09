import {
  Breadcrumbs,
  Heading,
  Paragraph,
  Details,
} from "@digdir/designsystemet-react";

function Tips() {
  return (
    <div className="l-content-max">
      <Breadcrumbs aria-label="Du er her:">
        <Breadcrumbs.Link href="/" aria-label="Tilbake til Forsiden">
          Konkurransetilsynet
        </Breadcrumbs.Link>
        <Breadcrumbs.List>
          <Breadcrumbs.Item>
            <Breadcrumbs.Link href="/">Konkurransetilsynet</Breadcrumbs.Link>
          </Breadcrumbs.Item>
          <Breadcrumbs.Item>
            <Breadcrumbs.Link href="/tips">Tips</Breadcrumbs.Link>
          </Breadcrumbs.Item>
        </Breadcrumbs.List>
      </Breadcrumbs>
      <div className="ktui-tips-page">
        <Heading level={1} data-size="2xl">
          Tips oss
        </Heading>
        <Paragraph>
          Du velger selv om du vil oppgi navn og kontaktinformasjon. Ved å oppgi
          kontaktinformasjon gir du oss mulighet til å ta kontakt ved behov for
          ytterligere opplysninger. Vi har taushetsplikt om tipsers identitet i
          saker ytterligere opplysninger. Vi har taushetsplikt om tipsers
          identitet i saker om ulovlig samarbeid og misbruk av dominerende
          stilling.
        </Paragraph>
        <Paragraph>
          Vi vurderer alle tips, men har ikke mulighet til å besvare hvert
          enkelt tips. Vi kan iverksette nærmere undersøkelser basert på
          innkomne tips.
        </Paragraph>
        <Paragraph>
          Ring oss på <b>+47 45 65 95 24</b>
        </Paragraph>
        <div className="faq">
          <Details>
            <Details.Summary>Hvorfor er det viktig å tipse?</Details.Summary>
            <Details.Content>
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
              nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
              ligula massa, varius a, semper congue, euismod non, mi.
            </Details.Content>
          </Details>
          <Details>
            <Details.Summary>Hva skjer med tipsene?</Details.Summary>
            <Details.Content>
              <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis cumque beatae dolorem repellat, vitae modi. Eveniet
                veniam ea assumenda voluptatum vitae quaerat possimus odit,
                beatae dolores praesentium, debitis voluptas. Ipsam!
              </Paragraph>
            </Details.Content>
          </Details>
          <Details>
            <Details.Summary>Hva er prosessen for tipsing?</Details.Summary>
            <Details.Content>
              <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis cumque beatae dolorem repellat, vitae modi. Eveniet
                veniam ea assumenda voluptatum vitae quaerat possimus odit,
                beatae dolores praesentium, debitis voluptas. Ipsam!
              </Paragraph>
            </Details.Content>
          </Details>
        </div>
      </div>
    </div>
  );
}

export default Tips;
