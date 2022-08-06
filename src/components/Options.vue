<script setup>
/* Import state "store" */
import { store } from '../store.js';
</script>

<template>
  <!-- Add `dark` class if dark mode is toggled on -->
  <aside :class="{ dark: store.viewMode }">
    <h2>Options</h2>
    <!-- Checkbox bound to `viewMode` state -->
    <p>Enable Dark Mode</p>
    <input type="checkbox" v-model="store.viewMode">
    <br /><br />
    <!-- Checkbox bound to `showMore` state -->
    <p>Show "Show More" Panel (DEBUG ONLY)</p>
    <input type="checkbox" v-model="store.showMore">
    <br /><br />
    <!-- PLACEHOLDER TEXT -->
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Eleifend mi in nulla posuere sollicitudin aliquam. Nisi est sit amet facilisis magna etiam tempor orci eu. Sed viverra tellus in hac. Tellus in metus vulputate eu scelerisque felis. Vel pretium lectus quam id leo in vitae. Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit. Et malesuada fames ac turpis egestas sed tempus. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Fermentum leo vel orci porta non pulvinar. A erat nam at lectus urna duis convallis. Pulvinar proin gravida hendrerit lectus a. Semper viverra nam libero justo laoreet. Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Dignissim sodales ut eu sem. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus.
<br /><br />
Laoreet id donec ultrices tincidunt arcu non. Vulputate eu scelerisque felis imperdiet proin fermentum. Massa tempor nec feugiat nisl. Suspendisse ultrices gravida dictum fusce ut. At tempor commodo ullamcorper a. Nisl rhoncus mattis rhoncus urna. Purus in mollis nunc sed id semper risus in. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Arcu non odio euismod lacinia at quis. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Faucibus et molestie ac feugiat. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus.
<br /><br />
Sed viverra ipsum nunc aliquet bibendum enim. Faucibus ornare suspendisse sed nisi lacus sed. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat in. Euismod in pellentesque massa placerat duis ultricies lacus. Praesent semper feugiat nibh sed pulvinar proin. Aliquam sem et tortor consequat id porta nibh venenatis. Scelerisque felis imperdiet proin fermentum. Id neque aliquam vestibulum morbi. Netus et malesuada fames ac. Malesuada proin libero nunc consequat interdum varius. Congue nisi vitae suscipit tellus mauris a diam maecenas sed. Eget nullam non nisi est sit amet facilisis. Tempus quam pellentesque nec nam aliquam sem et. Tincidunt eget nullam non nisi est sit amet facilisis. Ut venenatis tellus in metus vulputate eu scelerisque felis. Tortor dignissim convallis aenean et tortor at risus. Ante metus dictum at tempor commodo. Est velit egestas dui id ornare arcu odio ut. Sit amet massa vitae tortor condimentum lacinia quis vel eros.
<br /><br />
A diam maecenas sed enim ut sem viverra aliquet eget. Nulla facilisi cras fermentum odio eu feugiat. Tempus imperdiet nulla malesuada pellentesque. Dictum varius duis at consectetur lorem donec massa sapien. Vel quam elementum pulvinar etiam. Sapien faucibus et molestie ac feugiat. Porta nibh venenatis cras sed felis eget. Nec nam aliquam sem et tortor consequat id porta. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Morbi tristique senectus et netus et malesuada fames. Lectus quam id leo in vitae turpis. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. At lectus urna duis convallis convallis tellus id interdum velit. At elementum eu facilisis sed odio morbi quis. Sodales ut etiam sit amet nisl purus. Hendrerit dolor magna eget est lorem ipsum. Pellentesque habitant morbi tristique senectus et netus et. Pretium viverra suspendisse potenti nullam ac tortor vitae purus.
<br /><br />
Pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper. Ultrices eros in cursus turpis massa tincidunt dui ut. Amet volutpat consequat mauris nunc congue nisi. Enim sed faucibus turpis in eu mi bibendum. Gravida arcu ac tortor dignissim. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Nisi lacus sed viverra tellus. Metus dictum at tempor commodo. Sed viverra tellus in hac. Et netus et malesuada fames ac turpis egestas integer. Tellus elementum sagittis vitae et leo duis ut diam quam. Volutpat sed cras ornare arcu. Feugiat pretium nibh ipsum consequat nisl vel pretium. Elit ut aliquam purus sit amet luctus. Est placerat in egestas erat imperdiet sed euismod. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Sed tempus urna et pharetra pharetra massa.</p>
  </aside>
</template>

<style scoped>
aside {
    width: 20%;
    height: 100%;
    padding: 15px;
    overflow: auto;
}

aside h2 {
    text-align: center;
}
</style>