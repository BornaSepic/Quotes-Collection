import Vue from 'vue'

export const state = () => ({
  quoteFormOpen: false,
  quoteFormMode: 'add',
  quoteBeingEdited: {},
  totalQuotes: 0,
  quotesContent: []
});

export const mutations = {
  addQuote(state, quote) {
    state.quotesContent.push({
      author: quote.author,
      quote: quote.quote,
      id: quote._id
    })
    state.totalQuotes ++
  },
  removeQuote(state, index) {
    state.quotesContent.splice(index, 1);
    state.totalQuotes--
  },
  updateQuote(state, updatedQuote) {
    Vue.set(state.quotesContent, updatedQuote.quoteIndex, updatedQuote.newQuote)
  },
  toggleQuoteForm(state) {
    state.quoteFormOpen = !state.quoteFormOpen;
  },
  openQuoteForm(state) {
    state.quoteFormOpen = true;
  },
  closeQuoteForm(state) {
    state.quoteFormOpen = false;
  },
  changeEditorMode(state, mode) {
    state.quoteFormMode = mode;
  },
  editQuote(state, quoteProps) {
    state.quoteBeingEdited = quoteProps;
  },
  clearEditQuote(state) {
    state.quoteBeingEdited = {};
  }
}