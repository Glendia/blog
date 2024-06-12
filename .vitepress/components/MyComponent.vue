<ClientOnly>
    ```vue
    <template>
      <MyComponent msg="Hello from a Vue component!" />
    </template>
    
    <script>
    import MyComponent from './MyComponent.vue';
    
    export default {
      components: {
        MyComponent
      }
    }
    </script>