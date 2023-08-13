import { useRoutable } from '../../src/composables/useRoutable';
import type { ITagProps } from '../../src/composables/useRoutable';
import { mount } from '@vue/test-utils';

describe('Test composable useRoutable', () => {
    it('should be availability', () => {
        expect(typeof useRoutable).toBe('function');
    });

    it('should return component tag - NuxtLink', () => {
        const COMPONENT_PROPS: ITagProps = {
            tag: 'NuxtLink',
        };

        const wrapper = mount({
            template: '<div></div>',
            setup() {
                const { componentTag } = useRoutable(COMPONENT_PROPS);
                return { componentTag };
            },
        });

        expect(wrapper.vm.componentTag).toBe('NuxtLink');
    });

    it('should be return class list with interactive state of component', () => {
        const COMPONENT_PROPS: ITagProps = {
            tag: 'button',
        };
        const EXPECTED_VALUE = [{
            '--is-interactive': true,
        }];

        const wrapper = mount({
            template: '<div></div>',
            setup() {
                const { routableClassList } = useRoutable(COMPONENT_PROPS);
                return { routableClassList };
            },
        });

        expect(wrapper.vm.routableClassList).toEqual(EXPECTED_VALUE);
    });
});
