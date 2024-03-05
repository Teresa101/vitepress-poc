<template>
  <v-container>
    <v-row class="justify-left" id="examples">
        <v-expansion-panels variant="accordion" role="tree">
          <v-expansion-panel
            v-for="i in 3"
            :key="i"
            title="Item"
            role="treeitem"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          ></v-expansion-panel>
        </v-expansion-panels>
    </v-row>
  </v-container>
</template>

<style>
.v-theme--light.v-expansion-panels .v-expansion-panel-title .v-expansion-panel-title__icon .v-icon {
  color: var(--v-blue700-base);
}
.v-expansion-panel:before {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.24), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
}
.v-expansion-panel-title {
  font-size: 18px;
  font-weight: 600;
}
</style>



