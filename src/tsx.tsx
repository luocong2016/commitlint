import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  props: {
    name: {
      type: String as PropType<'lutz' | 'bukn'>,
      default: 'lutz'
    }
  },

  setup(props) {
    return () => <div>{ props.name }</div>
  }
})
