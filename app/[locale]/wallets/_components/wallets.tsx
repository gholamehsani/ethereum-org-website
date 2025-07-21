"use client"
",
      },
    },
  ]

  const guides = [
    
  0 >
          </div>
        </div>
        <div className="w-full px-8 py-4">
          <div className="-me-4 -ms-4 flex flex-wrap">
            {cards.map((card, idx) => (
              <StyledCard
                key={idx}
                emoji={card.emoji}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="-mb-8 mt-8 flex flex-col justify-between p-8 lg:flex-row">
        <div className="max-w-full flex-[0_1_50%] lg:me-8">
          <h2 className="mb-8 mt-12 text-2xl leading-[1.4] md:text-[2rem]">
            {t("page-wallets-accounts-addresses")}
          </h2>
          <p className="mb-[1.45rem] text-md leading-base">
            {t("page-wallets-accounts-addresses-desc")}
          </p>
          <ul>
            <li>
              <p className="mb-[1.45rem] text-md leading-base">
                <Translation id="page-wallets:page-wallets-ethereum-account" />
              </p>
            </li>
            <li>
              <p className="mb-[1.45rem] text-md leading-base">
                <Translation id="page-wallets:page-wallets-accounts-ethereum-addresses" />
              </p>
            </li>
            <li>
              <p className="mb-[1.45rem] text-md leading-base">
                <Translation id="page-wallets:page-wallets-ethereum-wallet" />
              </p>
            </li>
          </ul>
          <p className="mb-[1.45rem] text-md leading-base">
            {t("page-wallets-most-wallets")}
          </p>
        </div>
        <div className="mt-12 max-w-full flex-[0_1_50%] lg:ms-8 lg:mt-0">
          <h2 className="mb-8 mt-12 text-2xl leading-[1.4] md:text-[2rem]">
            {t("page-wallets-types")}
          </h2>
          <p className="mb-[1.45rem] text-md leading-base">
            {t("page-wallets-types-desc")}
          </p>
          <div className="flex flex-col gap-2">
            {types.map((type, idx) => (
              <HorizontalCard
                key={idx}
                emoji={type.emoji}
                description={type.description}
                className="my-0.5 w-[100%]"
                emojiClassName="text-[2.5rem]"
              />
            ))}
          </div>
        </div>
      </div>

      {locale === "en" ? (
        <div className="my-20 w-full px-0 py-4">
          <Simulator data={walletOnboardingSimData}>
            <p className="mb-2 text-lg italic leading-base text-body-medium md:text-xl lg:text-2xl">
              Interactive tutorial
            </p>
            <h2 className="m-0 text-3xl font-bold leading-[115%] lg:text-5xl">
              How to use a wallet
            </h2>
          </Simulator>
        </div>
      ) : (
        <div className="my-12 mt-4 w-full border-t bg-gradient-main px-0 py-16 lg:mt-8">
          <div className="w-full px-8 py-4">
            <div className="mb-8 flex flex-col items-center">
              <h2 className="mb-8 mt-12 text-2xl leading-[1.4] md:text-[2rem]">
                {t("page-wallets-features-title")}
              </h2>
              <div className="mb-6 text-center text-xl leading-base">
                {t("page-wallets-features-desc")}
              </div>
              <ButtonLink
                href="/wallets/find-wallet/"
                customEventOptions={{
                  eventCategory: "header buttons",
                  eventAction: "click",
                  eventName: "Find_wallet",
                }}
              >
                {t("page-wallets-find-wallet-btn")}
              </ButtonLink>
              <Image
                src={FindWalletImage}
                alt=""
                className="mt-8 w-full max-w-[800px] bg-cover bg-no-repeat"
              />
            </div>
          </div>
        </div>
      )}

      <div className="mb-12 flex flex-col justify-between p-8 lg:flex-row">
        <div className="max-w-full flex-[0_1_50%] lg:me-8">
          <h2 className="mb-8 mt-12 text-2xl leading-[1.4] md:text-[2rem]">
            {t("page-wallets-stay-safe")}
          </h2>
          <p className="mb-6 leading-xs">
            <Translation id="page-wallets:page-wallets-stay-safe-desc" />
          </p>
          <div className="flex flex-col gap-4">
            <HorizontalCard
              key="0"
              emoji=":white_check_mark:"
              title={t("page-wallets-take-responsibility")}
              description={t("page-wallets-take-responsibility-desc")}
              emojiClassName="text-2xl"
              className="items-start"
            />
            <HorizontalCard
              key="1"
              emoji=":white_check_mark:"
              title={<Translation id="page-wallets:page-wallets-seed-phrase" />}
              description={t("page-wallets-seed-phrase-desc")}
              emojiClassName="text-2xl"
              className="items-start"
            >
              <p className="mb-[1.45rem] text-md leading-base">
                {t("page-wallets-seed-phrase-example")}
              </p>
              <div className="rounded-base mb-4 bg-black p-2">
                <p className="font-mono text-sm text-white">
                  {t("page-wallets-seed-phrase-snippet")}
                </p>
              </div>
              <p className="mb-[1.45rem] text-md leading-base">
                {t("page-wallets-seed-phrase-write-down")}
              </p>
            </HorizontalCard>
            <HorizontalCard
              key="2"
              emoji=":white_check_mark:"
              title={t("page-wallets-bookmarking")}
              description={t("page-wallets-bookmarking-desc")}
              emojiClassName="text-2xl"
              className="items-start"
            />
            <HorizontalCard
              key="3"
              emoji=":white_check_mark:"
              title={t("page-wallets-triple-check")}
              description={t("page-wallets-triple-check-desc")}
              emojiClassName="text-2xl"
              className="items-start"
            />
          </div>
        </div>
        <div className="mt-12 max-w-full flex-[0_1_50%] lg:ms-8 lg:mt-0">
          <h2 className="mb-8 mt-12 text-2xl leading-[1.4] md:text-[2rem]">
            {t("page-wallets-tips")}
          </h2>
          <p className="mb-6 leading-xs">{t("page-wallets-tips-community")}</p>
          <CardList items={articles} />
        </div>
      </div>

      <div className="w-full px-8 py-4">
        <Divider />

        <h2 className="mb-8 mt-12 text-2xl leading-[1.4] md:text-[2rem]">
          {t("page-wallets-explore")}
        </h2>
        <div className="-me-4 -ms-4 mt-16 flex flex-wrap">
          <Callout
            image={ETHImage}
            titleKey="page-wallets:page-wallets-get-some"
            alt={t("page-wallets-get-some-alt")}
            descriptionKey="page-wallets:page-wallets-get-some-desc"
            className="min-h-full flex-1 basis-[424px]"
          >
            <div>
              <ButtonLink href="/get-eth/">
                {t("page-wallets-get-some-btn")}
              </ButtonLink>
            </div>
          </Callout>
          <Callout
            image={DappsImage}
            titleKey="page-wallets:page-wallets-try-dapps"
            alt={t("page-wallets-try-dapps-alt")}
            descriptionKey="page-wallets:page-wallets-try-dapps-desc"
            className="min-h-full flex-1 basis-[424px]"
          >
            <div>
              <ButtonLink href="/dapps/">
                {t("page-wallets-more-on-dapps-btn")}
              </ButtonLink>
            </div>
          </Callout>
        </div>
      </div>

      <div className="w-full px-8 py-4">
        <StandaloneQuizWidget quizKey="wallets" />
      </div>

      <div className="w-full px-8 py-4">
        <FileContributors
          className="my-10 border-t"
          contributors={contributors}
          lastEditLocaleTimestamp={lastEditLocaleTimestamp}
        />
        <FeedbackCard />
      </div>
    </MainArticle>
  )
}

export default WalletsPage
