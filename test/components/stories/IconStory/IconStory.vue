<script setup lang="ts">
// Components
import ComponentWrapper from '../../ComponentWrapper/ComponentWrapper.vue';
import OIcon from '../../../../src/components/OIcon/OIcon.vue';

</script>
<template>
    <ComponentWrapper name="OIcon">
        <template #component>
            <div class="icon-container">

                <OIcon class-prefix="Ui"
                       name="chevron"
                       size="small"
                />

                <OIcon class-prefix="Ui"
                       name="chevron"
                       size="medium"
                />

                <OIcon class-prefix="Ui"
                       name="chevron"
                       size="large"
                >
                    <template #sprite-component="props">
                        <svg :viewBox="props.viewBox">
                            <path d="M13.75 20.8615L26.389 8.22112L28.3346 10.1654L13.75 24.75L4.9995 15.9995L6.94375 14.0552L13.75 20.8615Z" />
                        </svg>
                    </template>
                </OIcon>

                <OIcon class-prefix="Ui"
                       name="social/instagram"
                       size="custom"
                />

            </div>
        </template>
    </ComponentWrapper>
</template>

<style lang="scss">
.UiIcon {
    &.--small-size {
        width: 16px;
        height: 16px;
    }

    &.--medium-size {
        width: 24px;
        height: 24px;
    }

    &.--large-size {
        width: 56px;
        height: 56px;
    }
}

.icon-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}
</style>
