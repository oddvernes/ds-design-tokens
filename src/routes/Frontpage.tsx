import {
  Search,
  Chip,
  Card,
  Heading,
  Paragraph,
} from "@digdir/designsystemet-react";
import {
  HandshakeIcon,
  ScalesIcon,
  ArrowsSplitIcon,
  ShoppingCartIcon,
  ArrowRightIcon,
  CoinsIcon,
  GasPumpIcon,
  TaxiIcon,
} from "@phosphor-icons/react";
import { Link } from "react-router";
import tipsImg from "../assets/tips.svg";

function Frontpage() {
  return (
    <div className="ktui-frontpage">
      <section
        className="l-content-max l-segment ktui-search-box"
        data-color="neutral"
      >
        <h2 data-size="xl" className="ds-heading">
          Hva leter du etter?
        </h2>
        <Search>
          <Search.Input aria-label="Søk" />
          <Search.Clear />
        </Search>
        <div className="l-flex-wrap">
          <Chip.Checkbox>Alle</Chip.Checkbox>
          <Chip.Checkbox>Vedtak</Chip.Checkbox>
          <Chip.Checkbox>Uttalelser</Chip.Checkbox>
          <Chip.Checkbox>Fusjoner og oppkjøp</Chip.Checkbox>
          <Chip.Checkbox>Avgjørelser</Chip.Checkbox>
          <Chip.Checkbox>Veiledninger</Chip.Checkbox>
          <Chip.Checkbox>Høringer</Chip.Checkbox>
          <Chip.Checkbox>Rapporter</Chip.Checkbox>
          <Chip.Checkbox>Pressemeldinger</Chip.Checkbox>
          <Chip.Checkbox>Nyheter</Chip.Checkbox>
          <Chip.Checkbox>Etterforskningssaker</Chip.Checkbox>
        </div>
      </section>
      <section
        data-color="mandarin"
        className="l-content-max l-segment ktui-lovverk-segment"
      >
        <a href="#" data-size="lg" className="ds-heading">
          Lovverk
          <ArrowRightIcon aria-hidden="true" />
        </a>

        <div className="_cards">
          <div className="icon-card" data-clickdelegatefor="lovverk-1">
            <div>
              <HandshakeIcon
                color="currentColor"
                size={48}
                aria-hidden="true"
              />
            </div>
            <a href="#" className="ds-heading" data-size="md" id="lovverk-1">
              Ulovlig samarbeid
            </a>
            <p>Konkurransebegrensende samarbeid - konkurranseloven § 10.</p>
          </div>
          <div className="icon-card" data-clickdelegatefor="lovverk-2">
            <div>
              <ScalesIcon color="currentColor" size={48} aria-hidden="true" />
            </div>
            <a href="#" className="ds-heading" data-size="md" id="lovverk-2">
              Misbruk av dominans
            </a>
            <p>Utnyttelse av dominerende stilling - konkurranseloven § 11.</p>
          </div>
          <div className="icon-card" data-clickdelegatefor="lovverk-3">
            <div>
              <ArrowsSplitIcon
                style={{ rotate: "-90deg" }}
                color="currentColor"
                size={48}
                aria-hidden="true"
              />
            </div>
            <a href="#" className="ds-heading" data-size="md" id="lovverk-3">
              Fusjoner og oppkjøp
            </a>
            <p>
              Inngrep mot foretakssammenslutninger mv. - konkurranseloven § 16.
            </p>
          </div>
          <div className="icon-card" data-clickdelegatefor="lovverk-4">
            <div>
              <ShoppingCartIcon
                color="currentColor"
                size={48}
                aria-hidden="true"
              />
            </div>
            <a href="#" className="ds-heading" data-size="md" id="lovverk-4">
              Lov om god handelsskikk
            </a>
            <p>Om lov om god handelsskikk i verdikjeden for dagligvare</p>
          </div>
        </div>
      </section>
      <section
        data-color="mandarin"
        className="l-content-max l-segment ktui-aktuelt-segment"
      >
        <a href="#" data-size="lg" className="ds-heading">
          Aktuelt
          <ArrowRightIcon aria-hidden="true" />
        </a>
        <div className="_cards">
          <Card data-color="neutral">
            <Card.Block>
              <img src="https://i.pravatar.cc/200?img=5" />
            </Card.Block>
            <Card.Block>
              <Heading>
                Øyvind Thomassen blir sjeføkonom i Konkurransetilsynet
              </Heading>
              <Paragraph>
                Professor Øyvind Thomassen (49) er ansatt som ny sjeføkonom i
                Konkurransetilsynet. Han kommer fra Norges Handelshøyskole og
                tiltrer stillingen 1. oktober.
              </Paragraph>
            </Card.Block>
          </Card>
          <Card data-color="neutral">
            <Card.Block>
              <img src="https://i.pravatar.cc/200?img=6" />
            </Card.Block>
            <Card.Block>
              <Heading>
                Konkurransetilsynet tildeler forskingsmidlar for 2026
              </Heading>
              <Paragraph>
                Konkurransetilsynet tildeler til saman 1.9 millionar kroner i
                tilskotsmidlar til fire forskingsprosjekt innan
                konkurransefagleg forsking.
              </Paragraph>
            </Card.Block>
          </Card>
          <Card data-color="neutral">
            <Card.Block>
              <img src="https://i.pravatar.cc/200?img=7" />
            </Card.Block>
            <Card.Block>
              <Heading>Vurderer å stoppe Elkjøps oppkjøp av Eplehuset</Heading>
              <Paragraph>
                Konkurransetilsynet vurderer å forby Elkjøps oppkjøp av
                Eplehuset, fordi oppkjøpet kan føre til svekket konkurranse
                innen salg av Mac og iPad til privatkunder.
              </Paragraph>
            </Card.Block>
          </Card>
        </div>
      </section>
      <section className="l-segment ktui-tip-segment" data-color="accent">
        <div className="l-content-max">
          <img src={tipsImg} alt="" />
          <div>
            <h2 data-size="xl" className="ds-heading">
              Tips oss
            </h2>
            <p>
              Tips er vanligvis utgangspunktet for arbeidet vårt. Du velger selv
              om du vil oppgi navn og kontaktinformasjon. Vi har taushetsplikt
              om tipsers identitet i saker om ulovlig samarbeid og misbruk av
              dominerende stilling. 
            </p>
            <p>
              Ring oss på <b>+47 45 65 95 24</b>
            </p>
            <Link to="/tips">
              Gå til tipsskjema <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>
      <section className="l-content-max l-segment ktui-tilsyn-segment">
        <h2 data-size="lg" className="ds-heading">
          Konkurransetilsynets tilsynsmarkeder
        </h2>

        <div className="_cards" data-color="mandarin">
          <div
            className="icon-card"
            data-clickdelegatefor="tilsyn-1"
            data-only-title
          >
            <div>
              <ShoppingCartIcon
                color="currentColor"
                size={48}
                aria-hidden="true"
              />
            </div>
            <a href="#" className="ds-heading" data-size="md" id="tilsyn-1">
              Dagligvare
            </a>
          </div>
          <div
            className="icon-card"
            data-clickdelegatefor="tilsyn-2"
            data-only-title
          >
            <div>
              <CoinsIcon color="currentColor" size={48} aria-hidden="true" />
            </div>
            <a href="#" className="ds-heading" data-size="md" id="tilsyn-2">
              Digital økonomi
            </a>
          </div>
          <div
            className="icon-card"
            data-clickdelegatefor="tilsyn-3"
            data-only-title
          >
            <div>
              <GasPumpIcon color="currentColor" size={48} aria-hidden="true" />
            </div>
            <a href="#" className="ds-heading" data-size="md" id="tilsyn-3">
              Drivstoff
            </a>
          </div>
          <div
            className="icon-card"
            data-clickdelegatefor="tilsyn-4"
            data-only-title
          >
            <div>
              <TaxiIcon color="currentColor" size={48} aria-hidden="true" />
            </div>
            <a href="#" className="ds-heading" data-size="md" id="tilsyn-4">
              Drosje
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Frontpage;
