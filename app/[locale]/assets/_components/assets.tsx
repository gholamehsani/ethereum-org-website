"use client"
"
// import ethGifSun from  from  from "@/public/images/assets/ethereum-logo-portrait-black-gray.png"
import ethPortraitPurple from "@/public/images/assets/ethereum-logo-portrait-purple.png"
import ethPortraitPurplePurple from 
import doge from "@/public/images/doge-computer.png"
import enterprise from "@/public/images/enterprise-eth.png"
import eth from "@/public/images/eth.png"
import finance from "@/public/images/finance_transparent.png"
import future from "@/public/images/future_transparent.png"
import hackathon from "@/public/images/hackathon_transparent.png"
import communityHero from "@/public/images/heroes/community-hero.png"
import developersHero from "@/public/images/heroes/developers-hub-hero.jpg"

import mergePanda from "@/public/images/home/merge-panda.png"
import impact from 
const H2 = (props: HTMLAttributes<HTMLHeadingElement>) => (
  <h2 className="mb-6 mt-16 scroll-mt-24 leading-xs" {...props} />
)

              className="w-20"
              src={assetPageHeroImage}
              alt={t("page-assets-eth-diamond-gray")}
            />
          </Center>
          <Center>
            <h1 className="my-8">{t("page-assets-h1")}</h1>
          </Center>
          <Center>
            <InlineLink href="/assets/#illustrations">
              {t("page-assets-illustrations")}
            </InlineLink>
          </Center>
          <Center>
            <InlineLink href="/assets/#historical">
              {t("page-assets-historical-artwork")}
            </InlineLink>
          </Center>
          <Center>
            <InlineLink href="/assets/#brand">
              {t("page-assets-ethereum-brand-assets")}
            </InlineLink>
          </Center>
        </Flex>

        <H2 id="illustrations">{t("page-assets-illustrations")}</H2>

        <Row>
          <AssetDownload
            title={t("page-assets-hero")}
            alt={t("page-assets-hero")}
            image={hero}
            artistName="Liam Cobb"
            artistUrl="https://liamcobb.com/"
          />
        </Row>
        <Row>
          <AssetDownload
            title={t("page-assets-learn-hero-name")}
            alt={t("page-assets-learn-hero-name")}
            image={learnHero}
            artistName="Liam Cobb"
            artistUrl="https://liamcobb.com/"
          />
          <AssetDownload
            title={t("page-assets-community-hero-name")}
            alt={t("page-assets-community-hero-name")}
            image={communityHero}
            artistName="Liam Cobb"
            artistUrl="https://liamcobb.com/"
          />
        </Row>
        <Row>
          <AssetDownload
            title={t("page-assets-quizzes-hero-name")}
            alt={t("page-assets-quizzes-hero-name")}
            image={quizzesHub}
            artistName="Liam Cobb"
            artistUrl="https://liamcobb.com/"
          />
          <AssetDownload
            title={t("page-assets-developers-hero-name")}
            alt={t("page-assets-developers-hero-name")}
            image={developersHero}
            artistName="Liam Cobb"
            artistUrl="https://liamcobb.com/"
          />
        </Row>
        <Row>
          <AssetDownload
            title={t("page-assets-garden-name")}
            alt={t("page-assets-garden-name")}
            image={garden}
            artistName="Liam Cobb"
            artistUrl="https://liamcobb.com/"
          />
          <AssetDownload
            title={t("page-assets-roadmap-hero-name")}
            alt={t("page-assets-roadmap-hero-name")}
            image={roadmapHero}
            artistName="Liam Cobb"
            artistUrl="https://liamcobb.com/"
          />
        </Row>
        <Row>
          <AssetDownload
            title={t("page-assets-layer-2-hero-name")}
            alt={t("page-assets-layer-2-hero-name")}
            image={layer2Hero}
            artistName="Liam Cobb"
            artistUrl="https://liamcobb.com/"
          />
          <AssetDownload
            title={t("page-assets-guides-hero-name")}
            alt={t("page-assets-guides-hero-name")}
            image={guidesHero}
            artistName="Liam Cobb"
            artistUrl="https://liamcobb.com/"
          />
        </Row>
        <Row>
          <AssetDownload
            title={t("page-assets-doge")}
            alt={t("page-assets-doge")}
            image={doge}
            artistName="WT"
          />
          <AssetDownload
            title={t("page-assets-blocks")}
            alt={t("page-assets-blocks")}
            image={developers}
            artistName="WT"
          />
          <AssetDownload
            title={t("page-assets-enterprise")}
            alt={t("page-assets-enterprise")}
            image={enterprise}
            artistName="WT"
          />
        </Row>
        <Row>
          <AssetDownload
            title={t("page-assets-infrastructure")}
            alt={t("page-assets-infrastructure")}
            image={infrastructure}
            artistName="WT"
          />
          <AssetDownload
            title={t("page-assets-finance")}
            alt={t("page-assets-finance")}
            image={finance}
            artistName="WT"
          />
          <AssetDownload
            title={t("page-assets-impact")}
            alt={t("page-assets-impact")}
            image={impact}
            artistName="WT"
          />
        </Row>
        <Row>
          <AssetDownload
            title={t("page-assets-future")}
            alt={t("page-assets-future")}
            image={future}
            artistName="WT"
          />
          <AssetDownload
            title={t("page-assets-hackathon")}
            alt={t("page-assets-hackathon")}
            image={hackathon}
            artistName="WT"
          />
          <AssetDownload
            title={t("page-assets-robot")}
            alt={t("page-assets-robot")}
            image={wallet}
            artistName="WT"
          />
        </Row>
        <Row>
          <AssetDownload
            title={t("page-assets-bazaar")}
            alt={t("page-assets-bazaar")}
            image={whatIsEthereum}
            artistName="Viktor Hachmang"
            artistUrl="http://viktorhachmang.nl/"
          />
          <AssetDownload
            title={t("page-assets-eth")}
            alt={t("page-assets-eth")}
            image={eth}
            artistName="Viktor Hachmang"
            artistUrl="http://viktorhachmang.nl/"
          />
        </Row>
        <Row>
          <AssetDownload
            title={t("page-assets-mainnet")}
            alt={t("page-assets-mainnet")}
            image={oldShip}
            artistName="Viktor Hachmang"
            artistUrl="https://viktorhachmang.nl"
          />
          <AssetDownload
            title={t("page-assets-merge")}
            alt={t("page-assets-merge")}
            image={merge}
            artistName="Viktor Hachmang"
            artistUrl="https://viktorhachmang.nl"
          />
        </Row>
        <Row>
          <AssetDownload
            title={t("page-assets-beacon-chain")}
            alt={t("page-assets-beacon-chain")}
            image={beaconChain}
            artistName="Viktor Hachmang"
            artistUrl="http://viktorhachmang.nl/"
          />
          <AssetDownload
            title={t("page-assets-sharding")}
            alt={t("page-assets-sharding")}
            image={newRings}
            artistName="Viktor Hachmang"
            artistUrl="https://viktorhachmang.nl"
          />
        </Row>
        <Row>
          <AssetDownload
            title={t("page-assets-defi")}
            alt={t("page-assets-defi")}
            image={defi}
            artistName="Patrick Atkins"
            artistUrl="https://www.patrickatkins.co.uk/"
          />
          <AssetDownload
            title={t("page-assets-dao")}
            alt={t("page-assets-dao")}
            image={dao}
            artistName="Patrick Atkins"
            artistUrl="https://www.patrickatkins.co.uk/"
          />
        </Row>
        <H2 id="historical">{t("page-assets-historical-artwork")}</H2>
        <H2 id="brand">{t("page-assets-ethereum-brand-assets")}</H2>
        <H3>{t("page-assets-page-assets-transparent-background")}</H3>
        <Row>
          <AssetDownload
            title={t("page-assets-eth-diamond-glyph")}
            alt={t("page-assets-eth-diamond-glyph")}
            image={ethDiamondGlyph}
            svgUrl={`${svgPathFromOrigin}/images/assets/svgs/eth-diamond-glyph.svg`}
          />
          <AssetDownload
            title={t("page-assets-eth-diamond-gray")}
            alt={t("page-assets-eth-diamond-gray")}
            image={ethDiamondBlack}
            svgUrl={`${svgPathFromOrigin}/images/assets/svgs/eth-diamond-black.svg`}
          />
          <AssetDownload
            title={t("page-assets-eth-diamond-color")}
            alt={t("page-assets-eth-diamond-color")}
            image={ethDiamondColor}
            svgUrl={`${svgPathFromOrigin}/images/assets/svgs/eth-diamond-rainbow.svg`}
          />
        </Row>
        <Row>
          <AssetDownload
            title={t("page-assets-eth-diamond-purple")}
            alt={t("page-assets-eth-diamond-purple")}
            image={ethDiamondPurple}
            svgUrl={`${svgPathFromOrigin}/images/assets/svgs/eth-diamond-purple.svg`}
          />
          <AssetDownload
            title={t("page-assets-eth-diamond-colored")}
            alt={t("page-assets-eth-diamond-colored")}
            image={ethGlyphColored}
            svgUrl={`${svgPathFromOrigin}/images/assets/svgs/eth-glyph-colored.svg`}
          />
        </Row>
        <Row>
          <AssetDownload
            title={t("page-assets-eth-logo-portrait-gray")}
            alt={t("page-assets-eth-logo-portrait-gray")}
            image={ethPortraitBlack}
            svgUrl={`${svgPathFromOrigin}/images/assets/svgs/ethereum-logo-portrait-black.svg  `}
          />
          <AssetDownload
            title={t("page-assets-eth-logo-landscape-gray")}
            alt={t("page-assets-eth-logo-landscape-gray")}
            image={ethLandscapeBlack}
            svgUrl={`${svgPathFromOrigin}/images/assets/svgs/ethereum-logo-landscape-black.svg`}
          />
          <AssetDownload
            title={t("page-assets-eth-wordmark-gray")}
            alt={t("page-assets-eth-wordmark-gray")}
            image={ethWordmarkBlack}
            svgUrl={`${svgPathFromOrigin}/images/assets/svgs/ethereum-wordmark-black.svg`}
          />
        </Row>
        <Row>
          <AssetDownload
            title={t("page-assets-eth-logo-portrait-purple")}
            alt={t("page-assets-eth-logo-portrait-purple")}
            image={ethPortraitPurple}
            svgUrl={`${svgPathFromOrigin}/images/assets/svgs/ethereum-logo-portrait-purple.svg`}
          />
          <AssetDownload
            title={t("page-assets-eth-logo-landscape-purple")}
            alt={t("page-assets-eth-logo-landscape-purple")}
            image={ethLandscapePurple}
            svgUrl={`${svgPathFromOrigin}/images/assets/svgs/ethereum-logo-landscape-purple.svg`}
          />
          <AssetDownload
            title={t("page-assets-eth-wordmark-purple")}
            alt={t("page-assets-eth-wordmark-purple")}
            image={ethWordmarkPurple}
            svgUrl={`${svgPathFromOrigin}/images/assets/svgs/ethereum-wordmark-purple-purple.svg`}
          />
        </Row>
        <H3>{t("page-assets-page-assets-solid-background")}</H3>
        <Row>
          <AssetDownload
            title={t("page-assets-eth-diamond-white")}
            alt={t("page-assets-eth-diamond-white")}
            image={ethDiamondBlackWhite}
            svgUrl={`${svgPathFromOrigin}/images/assets/svgs/eth-diamond-black-white.svg`}
          />
          <AssetDownload
            title={t("page-assets-eth-diamond-gray")}
            alt={t("page-assets-eth-diamond-gray")}
            image={ethDiamondBlackGray}
            svgUrl={`${svgPathFromOrigin}/images/assets/svgs/eth-diamond-black-gray.svg`}
          />
          <AssetDownload
            title={t("page-assets-eth-diamond-purple")}
            alt={t("page-assets-eth-diamond-purple")}
            image={ethDiamondPurplePurple}
            svgUrl={`${svgPathFromOrigin}/images/assets/svgs/eth-diamond-purple-purple.svg`}
          />
        </Row>

        <Row>
          <AssetDownload
            title={t("page-assets-eth-diamond-white")}
            alt={t("page-assets-eth-diamond-white")}
            image={ethDiamondPurpleWhite}
            svgUrl={`${svgPathFromOrigin}/images/assets/svgs/eth-diamond-purple-white.svg`}
          />
          <AssetDownload
            title={t("page-assets-eth-diamond-white")}
            alt={t("page-assets-eth-diamond-white")}
            image={ethDiamondPurpleWhite}
            svgUrl={`${svgPathFromOrigin}/images/assets/svgs/eth-diamond-purple-white.svg`}
          />
        </Row>
        <Row>
          <AssetDownload
            title={t("page-assets-eth-logo-portrait-gray")}
            alt={t("page-assets-eth-logo-portrait-gray")}
            image={ethPortraitBlackGray}
            svgUrl={`${svgPathFromOrigin}/images/assets/svgs/ethereum-logo-portrait-black-gray.svg`}
          />
          <AssetDownload
            title={t("page-assets-eth-logo-landscape-gray")}
            alt={t("page-assets-eth-logo-landscape-gray")}
            image={ethLandscapeBlackGray}
            svgUrl={`${svgPathFromOrigin}/images/assets/svgs/ethereum-logo-landscape-black-gray.svg`}
          />
          <AssetDownload
            title={t("page-assets-eth-wordmark-gray")}
            alt={t("page-assets-eth-wordmark-gray")}
            image={ethWordmarkBlackGray}
            svgUrl={`${svgPathFromOrigin}/images/assets/svgs/ethereum-wordmark-black-gray.svg`}
          />
        </Row>
        <Row>
          <AssetDownload
            title={t("page-assets-eth-logo-portrait-purple")}
            alt={t("page-assets-eth-logo-portrait-purple")}
            image={ethPortraitPurplePurple}
            svgUrl={`${svgPathFromOrigin}/images/assets/svgs/ethereum-logo-portrait-purple-purple.svg`}
          />
          <AssetDownload
            title={t("page-assets-eth-logo-landscape-purple")}
            alt={t("page-assets-eth-logo-landscape-purple")}
            image={ethLandscapePurplePurple}
            svgUrl={`${svgPathFromOrigin}/images/assets/svgs/ethereum-logo-landscape-purple-purple.svg`}
          />
          <AssetDownload
            title={t("page-assets-eth-wordmark-purple")}
            alt={t("page-assets-eth-wordmark-purple")}
            image={ethWordmarkPurplePurple}
            svgUrl={`${svgPathFromOrigin}/images/assets/svgs/ethereum-wordmark-purple-purple.svg`}
          />
        </Row>
        <Row>
          <AssetDownload
            title={t("page-assets-eth-logo-landscape-white")}
            alt={t("page-assets-eth-logo-landscape-white")}
            image={ethLandscapePurpleWhite}
            svgUrl={`${svgPathFromOrigin}/images/assets/svgs/ethereum-logo-landscape-purple-white.svg`}
          />
          <AssetDownload
            title={t("page-assets-eth-wordmark-white")}
            alt={t("page-assets-eth-wordmark-white")}
            image={ethWordmarkPurpleWhite}
            svgUrl={`${svgPathFromOrigin}/images/assets/svgs/ethereum-wordmark-purple-white.svg`}
          />
        </Row>
        <H2 id="historical-illustrations">{t("page-assets-illustrations")}</H2>
        <Row>
          <AssetDownload
            title={t("page-assets-hero-panda")}
            alt={t("page-assets-hero-panda")}
            image={heroPanda}
          />
          <AssetDownload
            title={t("page-assets-merge-panda")}
            alt={t("page-assets-merge-panda")}
            image={mergePanda}
            svgUrl={`${svgPathFromOrigin}/images/assets/svgs/merge-panda.svg`}
          />
        </Row>
      </MainArticle>
      <FeedbackCard />
    </Flex>
  )
}

export default AssetsPage
