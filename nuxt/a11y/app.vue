<template>
  <button ref="plusRef" @click="plus">plus</button>
  <button ref="minusRef" @click="minus">minus</button>
  <p>{{ count }}</p>
  <div class="">
    <button ref="modalRef" @click="modal">modal</button>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'

const count = ref(0)

const plusRef = ref<HTMLButtonElement | null>(null)
const minusRef = ref<HTMLButtonElement | null>(null)
const modalRef = ref<HTMLButtonElement | null>(null)

const prevRef = ref<HTMLButtonElement | null>(null)

function plus(ev : PointerEvent) {
  console.log('plus', ev)
  count.value = count.value + 1

  if (!modalRef.value) return
  modalRef.value.focus({preventScroll: true})

  if (!plusRef.value) return
  setPrevRef(plusRef.value)
}

function minus(ev : PointerEvent) {
  console.log('minus', ev)
  count.value = count.value - 1

  if (!modalRef.value) return
  modalRef.value.focus({preventScroll: true})

  if (!minusRef.value) return
  setPrevRef(minusRef.value)
}

function modal(ev : PointerEvent) {
  console.log('modal', ev)

  if (!modalRef.value) return
  modalRef.value.focus({preventScroll: true})

  if (!prevRef.value) return
  prevRef.value.focus({preventScroll: true})
}

function setPrevRef(el :HTMLButtonElement) {
  prevRef.value = el
}
</script>

<style>

</style>
