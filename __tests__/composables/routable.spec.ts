import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';

describe('test composable routable', () => {
    it('should be availability', () => {
        expect(typeof useUiRoutable).toBe('function');
    });

    it('should return component tag - NuxtLink', () => {
        const COMPONENT_PROPS = {
            tag: 'NuxtLink',
        };

        const wrapper = mount({
            template: '<div></div>',
            setup() {
                const { componentTag } = useUiRoutable(COMPONENT_PROPS);
                return { componentTag };
            },
        });

        expect(wrapper.vm.componentTag).toBe('NuxtLink');
    });

    it('should be return class list with interactive state of component', () => {
        const COMPONENT_PROPS = {
            tag: 'button',
        };
        const EXPECTED_VALUE = [
            {
                '--is-interactive': true,
            },
        ];

        const wrapper = mount({
            template: '<div></div>',
            setup() {
                const { routableClassList } = useUiRoutable(COMPONENT_PROPS);
                return { routableClassList };
            },
        });

        expect(wrapper.vm.routableClassList).toEqual(EXPECTED_VALUE);
    });
});
