export const t = {
    INCREMENT_COUNTER: "INCREMENT_COUNTER",
    TRANSLATE_EXPRESSION: "TRANSLATE_EXPRESSION",
    TRANSLATE_BACK: "TRANSLATE_BACK"
};

export const actions = {
    incrementCounter: () => ({
        type: t.INCREMENT_COUNTER
    }),

    translateExpression: () => ({
        type: t.TRANSLATE_EXPRESSION
    }),

    translateBack: () => ({
        type: t.TRANSLATE_BACK
    })
};