<template>
  <div 
    v-bind:class="{'quote-adder--open' : editorOpen}"
    class="quote-adder--wrapper"
  >
    <div 
      class="quote-adder"
      v-bind:class="[editorOpen ? quoteAdderActiveClass : quoteAdderNotActiveClass]"
      @click="toggleForm()"
    >
        <div class="horizontal-line"></div>
        <div class="vertical-line"></div>
    </div>
    <div 
     v-if="editorMode === 'add'"
     class="form--wrapper">
      <h3 class="new-quote-text">Add a new Quote</h3>
      <QuoteFormAdd />
    </div>
    <div 
     v-if="editorMode === 'edit'"
     class="form--wrapper">
      <div class="form-title">
        <h3 class="new-quote-text">Edit your Quote</h3>
        <span 
          @click="revertToAddMode"
          class="leave-edit">
          Add a new quote
        </span>
      </div>
       <QuoteFormEdit 
        :editedQuoteProps="editProps"
       />
    </div>
   
  </div>
</template>
<script>
import QuoteFormAdd from './QuoteFormAdd'
import QuoteFormEdit from './QuoteFormEdit'

export default {
  name: 'quoteAdder',
  components: {
    QuoteFormAdd,
    QuoteFormEdit
  },
  data: () => {
    return {
      quoteAdderActiveClass: 'quote-adder--minus',
      quoteAdderNotActiveClass: 'quote-adder--plus',
    }
  },
  computed: {
    editorOpen: function() {
      return this.$store.state.quoteFormOpen
    },
    editorMode: function() {
      return this.$store.state.quoteFormMode
    },
    editProps: function() {
      return this.$store.state.quoteBeingEdited 
    }
  },
  methods: {
    toggleForm: function() {
      this.$store.commit('toggleQuoteForm')
    },
    revertToAddMode: function() {
      this.$store.commit('changeEditorMode', 'add')
      this.$store.commit('openQuoteForm')
      this.$store.commit('clearEditQuote')
    }
  }
}
</script>

<style>
  .quote-adder--wrapper {
    max-width: 720px;
    width: 90%;
    background: #fec759;
    border: 7px solid black;
    border-bottom: none;
    position: fixed;
    bottom: 0px;
    left: 50%;    
    transform: translate(-50%, calc(100% - 70px));
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    transition: transform 1s ease-in-out;
  }
  .quote-adder--wrapper.quote-adder--open {
    transform: translate(-50%, 0px)
  }
  .quote-adder{
    cursor: pointer;
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    top: -29px;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: #e46524;
    padding: 2px;
  }
  .quote-adder .horizontal-line, .quote-adder .vertical-line  {
    position: absolute;
    height: 25px;
    width: 5px;
    background: white;
    right: 50%;
    top: 50%;
    transform: translate(50%, -50%);
    transition: transform 1s ease-in-out;
  }
  .quote-adder .vertical-line {
    transform: translate(50%, -50%) rotate(90deg);
  }
  .quote-adder--minus .vertical-line {
    transform: translate(50%, -50%) rotate(270deg);
  }
  .quote-adder--minus .horizontal-line {
    transform: translate(50%, -50%) rotate(450deg);
  }
  h3.new-quote-text {
    text-align: center;
    font-size: 22px;
    text-transform: capitalize;
  }
  .form-title {
    position: relative;
  }
  span.leave-edit {
    position: absolute;
    right: 20px;
    top: 4px;
    text-decoration: underline;
    cursor: pointer;
  }
</style>
