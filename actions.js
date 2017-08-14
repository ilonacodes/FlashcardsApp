export const t = {
    TRANSLATE_EXPRESSION: "TRANSLATE_EXPRESSION",
    TRANSLATE_BACK: "TRANSLATE_BACK",
    NEXT_FLASHCARD: "NEXT_FLASHCARD",
    INVERT_TRANSLATION: "INVERT_TRANSLATION",
    UPDATE_DIMENSIONS: "UPDATE_DIMENSIONS"
};

export const actions = {
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

    updateDimensions: (payload) => ({
        type: t.UPDATE_DIMENSIONS,
        payload,
    }),
};