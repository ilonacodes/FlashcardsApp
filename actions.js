export const t = {
    INCREMENT_COUNTER: "INCREMENT_COUNTER",
    TRANSLATE_EXPRESSION: "TRANSLATE_EXPRESSION",
    TRANSLATE_BACK: "TRANSLATE_BACK",
    NEXT_FLASHCARD: "NEXT_FLASHCARD",
    INVERT_TRANSLATION: "INVERT_TRANSLATION",
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
    }),

    goToNext: () => ({
        type: t.NEXT_FLASHCARD
    }),

    invertTranslation: () => ({
        type: t.INVERT_TRANSLATION
    }),
};