import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    name: {
      type: String,
      default: 'lutz'
    }
  },
  setup(props) {
    return () => <div>{ props.name }</div>
  }
})
