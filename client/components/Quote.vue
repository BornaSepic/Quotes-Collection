<template>
  <transition name="slide-off">
    <div 
      v-if="!quoteRemoved"
      v-bind:class="{'quote--removed': quoteRemoved}"
      class="quote">
      <div class="edit-tools">
        <span class="edit"
        @click="editQuote()">
          <i class="fas fa-pen-square"></i></span>
        <span 
        @click="removeQuote()"
        class="remove">
          <i class="far fa-trash-alt"></i>
        </span>
      </div>
      <p class="quote--text">{{ quote }}</p>
      <p class="quote--author">{{ author }}</p>
    </div>
  </transition>
</template>

<script>
import axios from 'axios'
export default {
  name: 'quote',
  props: {
    quote: {
      type: String,
      default: ''
    },
    author: {
      type: String,
      default: ''
    },
    quoteIndex: {
      type: Number,
      default: 0
    },
    id: {
      type: String,
      default: ''
    }
  },
  data: () => {
    return {
      quoteRemoved: false
    }
  },
  methods: {
    removeQuote: function() {
      axios 
        .delete('https://quotes.bornasepic.me/api/quotes', {params: {
          idToRemove: this.id
        }})
        .then(res => {
          this.quoteRemoved = true;
        })
    },
    editQuote: function() {
      if(this.$store.state.quoteFormMode != 'add') {
        return
      }
      this.$store.commit('openQuoteForm')
      this.$store.commit('changeEditorMode', 'edit')
      this.$store.commit('editQuote', {
        'quote': this.quote, 
        'author': this.author, 
        'id': this.id,
        'quoteIndex': this.quoteIndex
      })
    }
  }
}
</script>

<style>
  .quote {
    position: relative;
    display: block;
    width: calc(100% - 40px);
    padding-right: 40px;
    max-height: 100%;
    opacity: 1;
    transition: all 1.2s ease;
    overflow: hidden;
  }
  .quote--text {
    margin-bottom: 5px;
    white-space: pre-line;
  }
  .quote--author {
    text-align: right;
    font-size: 15px;
    margin-top: 0px;
    font-style: italic;
    font-family: 'Pacifico', cursive;
  }
  textarea.quote--text  {
    width: 100%;
    -webkit-appearance: none;
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid black;
    background: none;
    margin-bottom: 10px;
    -webkit-appearance: none;
    font-size: 16px;
    padding: 5px;
  }
  .edit-tools {
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
    position: absolute;
    right: 0px;
    top: 0px;
    height: 100%;
  }
  .edit-tools span {  
    cursor: pointer;
  }
  .quote--removed {
    max-height: 0px;
    height: auto;
    transition: all 1.5s;
  }
  .slide-off-leave-active, .slide-off-leave-to {
    transform: translateX(100vw);
    opacity: 0.2;
  }
</style>
