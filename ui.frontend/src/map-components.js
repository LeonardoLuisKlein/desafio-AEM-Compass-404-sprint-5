import CustomClasses from './components/CustomClasses/CustomClasses'
import AppPage from './components/Page/AppPage'
import CheckBox from './components/Micro/Checkbox/Checkbox'
import Header from './components/Experience-fragments/Header/Header'
import Image from './components/Micro/Image/Image'
import Footer from './components/Experience-fragments/Footer/Footer'
import Main from './components/Containers/Main/Main'
import TextContent from './components/Micro/TextContent/TextContent'
import MultifieldExampleComponent from './components/MultifieldExampleComponent/MultifieldExampleComponent'
import {
  withComponentMappingContext,
  AllowedComponentsContainer,
  MapTo
} from '@mavice/aem-vue-editable-components'

MapTo('vue/components/page')(withComponentMappingContext(AppPage))

// Custom EditConfig for General New Vue Components
const EditConfig = {
  emptyLabel: 'Empty',

  isEmpty: function (props) {
    return !props
  }
}
/** *******************************************************************
              ↓  NEW COMPONENTS MAPPING COME HERE  ↓
**********************************************************************/

MapTo('vue/components/customclasses')(CustomClasses, EditConfig)

// Teste Component Mapping
MapTo('vue/components/multifield-example-component')(
  MultifieldExampleComponent,
  EditConfig
)

// TextContent Component Mapping
MapTo('vue/components/text-content')(TextContent, EditConfig)

// Footer Component Mapping
MapTo('vue/components/footer')(Footer, EditConfig)

// Main Component Mapping
MapTo('vue/components/main')(Main, EditConfig)

// Checkbox Component Mapping
MapTo('vue/components/checkbox')(CheckBox, EditConfig)

// Header Component Mapping
MapTo('vue/components/header')(Header, EditConfig)

// Image Component Mapping
MapTo('vue/components/image')(Image, {
  emptyLabel: 'Image',
  isEmpty: function (props) {
    return !props || !props.src || props.src.trim().length < 1
  },
  resourceType: 'vue/components/image'
})

// Container Component Mapping
MapTo('vue/components/container')(
  withComponentMappingContext(AllowedComponentsContainer),
  {
    emptyLabel: 'Container',

    isEmpty: function (props) {
      return !props || !props.cqItemsOrder || props.cqItemsOrder.length === 0
    }
  }
)
