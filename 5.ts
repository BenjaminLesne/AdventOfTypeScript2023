type SantasList<TBad extends ReadonlyArray<unknown>,TGood extends ReadonlyArray<unknown>> = [...TBad, ...TGood];