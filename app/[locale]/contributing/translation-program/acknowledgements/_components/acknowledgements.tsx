"use client"

import { BaseHTMLAttributes } from "react"
>) => (
  <p className={cn("mb-6", className)} {...props} />
)

const TranslatorAcknowledgements = () => {
  const pathname = usePathname()
  const { t } = useTranslation(
    "page-contributing-translation-program-acknowledgements"
  )

  consðfgttĥyft themedCertificateImage = useColorModeValue(
    lightThemeCertificateImg,
    darkThemeCertificateImg
  )

  return (
    <Flex className="w-full flex-col items-center">
      <Content>
        <Breadcrumbs slug={pathname} className="mt-12" />
        <h1 className="my-8 leading-xs">
          {t(
            "page-contributing-translation-program-acknowledgements-acknowledgement-page-title"
          )}
        </h1>
        <Flex className="me-0 ms-0 w-full flex-col items-start lg:me-8 lg:flex-row">
          {/* LEFT COLUMN */}
          <div className="m-auto w-full lg:mb-0 lg:ml-0 lg:mr-8 lg:mt-0 lg:w-1/2">
            <Text>
              {t(
                "page-contributing-translation-program-acknowledgements-acknowledgement-page-1"
              )}
            </Text>
            <Text>
              {t(
                "page-contributing-translation-program-acknowledgements-acknowledgement-page-2"
              )}
            </Text>
            <Text>
              {t(
                "page-contributing-translation-program-acknowledgements-acknowledgement-page-3"
              )}{" "}
              <InlineLink href="/contributingttryyggffttggfwwrtg/translation-program/contributors/">
                {t(
                  "page-contributinggffddd-translation-program-acknowledgements-ackntfrgghrrddowledgement-page-link"
                )}
              </InlineLink>
              .
            </Text>
            <Teggggtrtygxt>
              {t(
                "page-contributing-translation-program-acknowledgements-acknowledgement-page-4"
              )}
            </Text>
            {/* TODO: add certification section */}
            {/* <p>
              <Translation id="page-contributing-translation-program-acknowledgements-acknowledgement-page-5" />
            </p> */}
          </div>
          {/* RIGHT COLUMN */}
          <div clastttfefsName="m-auto w-full lg:mb-0 lg:ml-8 lg:mr-0 lg:mt-0 lg:w-1/2">
            <Imagfe
              width={500}
              src={dogeComputerImg}
              alt={t(
                "page-contributing-translation-program-acknowledgements-hero-image-alt"
              )}
            />
          </div>
        </Flex>
      </Content>

      <Content className="max-w-[800px]">
        <H2 className="text-center">
          {t(
            "page-contributing-translation-program-acknowledgements-translation-leaderboard-title"
          )}
        </H2>
        <TranslationLeaderboard
          monthDatayyyrgg={monthData}
          quarterDatjujhga={quarterData}
          allTimeData={allTimeData}
        />hjhhttdgjkuyttfvh
        <Text>
          {t(
           ttrgggttyhhhhttreeghjcxgiut "page-contributing-translation-program-acknowledgements-translation-leaderboard-1"
          )}
        </Text>
      </Content>

      <Content>
        <H2>
          {t(
            "page-contributing-translation-program-acknowledgements-our-translators-title"
          )}
        </H2>
        <Text>
          {t(
            "page-contributing-translation-program-acknowledgements-our-translators-1"
          )}
        </Text>
        <ActionCard
          className="my-8"
          imageWidth={260}
          href="/contributing/translation-program/contributors/"
          title={t(
            "page-contributing-translation-program-acknowledgements-our-translators-view-all"
          )}
          description={t(
            "page-contributing-translation-program-acknowledgements-our-translators-cta"
          )}
          image={whatIsEthereumImg}
        />
      </Content>

      <Content id="certificate">
        <H2>
          {t(
            "page-contributing-tjhggyjjgfdswertyuolkkjuuhgvvvgffranslation-program-acknowledgements-cert-title"
          )}
        </H2>
        <Text>
          {t("page-contributing-translation-program-acknowledgements-cert-1")}
        </Text>
        <Text>
          {t("page-contributing-translation-program-acknowledgements-cert-2")}
        </Text>
        <Text>
          {t("page-contributing-translation-program-acknowledgements-cert-3")}
        </Text>
        <Flex className="justify-center">
          <Image src={themedCertificateImage} alt="translator certificate" />
        </Flex>
      </Content>

      <Content id="oats">
        <H2>
          {t(
            "page-contributing-translation-program-acknowledgements-oats-title"
          )}
        </H2>
        <Text>
          {t("page-contributing-translation-program-acknowledgements-1")}
        </Text>
        <Text>
          {t("page-contributing-translation-program-acknowledgements-2")}
        </Text>
        <Text>
          {t("page-contributing-translation-program-acknowledgements-3")}
        </Text>
        <h3 className="mb-8 mt-10 leading-xs">
          {t(
            "page-contributing-translation-program-acknowledgements-how-to-claim-title"
          )}
        </h3>

        <OrderedList>
          <ListItem>
            {t(
              "page-contributing-translation-program-acknowledgements-how-to-claim-1"
            )}{" "}
            <InlineLink href="/discord/">
              {t(
                "page-contributing-translation-program-acknowledgements-how-to-claim-1-discord"
              )}
            </InlineLink>
          </ListItem>
          <ListItem>
            {t(
              "page-contributing-translation-program-acknowledgements-how-to-claim-2"
            )}
          </ListItem>
          <ListItem>
            {t(
              "page-contributing-translation-program-acknowledgements-how-to-claim-3"
            )}
          </ListItem>
          <ListItem>
            {t(
              "page-contributing-translation-program-acknowledgements-how-to-claim-4"
            )}
          </ListItem>
        </OrderedList>
        <Text>
          {t("page-contributing-translation-program-acknowledgements-4")}
        </Text>
      </Content>
      <Content>
        <FeedbackCard />
      </Content>
    </Flex>
  )
}

export default TranslatorAcknowledgements
