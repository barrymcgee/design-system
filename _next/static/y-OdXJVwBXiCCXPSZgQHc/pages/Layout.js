(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{FhkS:function(e,n,a){"use strict";a.r(n);var o=a("Ff2n"),t=a("q1tI"),p=a.n(t),m=a("6qfE"),s=p.a.createElement;n.default=function(e){var n=e.components;Object(o.a)(e,["components"]);return s(m.MDXTag,{name:"wrapper",components:n},s(m.MDXTag,{name:"h1",components:n,props:{id:"layout-guide"}},s(m.MDXTag,{name:"a",components:n,parentName:"h1",props:{href:"#layout-guide","aria-hidden":"true"}},s(m.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon icon-link"}})),"Layout Guide"),s(m.MDXTag,{name:"p",components:n},"The ",s(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/Box"}},"Box")," and ",s(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/Flex"}},"Flex")," components are low-level layout components that can handle virtually\nany layout styling that could be handled with a grid system as well as handle a lot of microlayout styles."),s(m.MDXTag,{name:"h3",components:n,props:{id:"flexbox"}},s(m.MDXTag,{name:"a",components:n,parentName:"h3",props:{href:"#flexbox","aria-hidden":"true"}},s(m.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon icon-link"}})),"Flexbox"),s(m.MDXTag,{name:"p",components:n},"To effectively use the Flex component, you should be familiar with Flexible Box (flexbox) Layout.\nThe following links can be useful to understand how flexbox works:"),s(m.MDXTag,{name:"ul",components:n},s(m.MDXTag,{name:"li",components:n,parentName:"ul"},s(m.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://www.w3.org/TR/css-flexbox-1/"}},"CSS Flexible Box Layout Module")),s(m.MDXTag,{name:"li",components:n,parentName:"ul"},s(m.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes"}},"MDN: Using CSS Flexible Boxes"))),s(m.MDXTag,{name:"p",components:n},"Additionally you should be aware of flexbox's bugs and limitations, especially in regards to IE11 support.\nGenerally the Design System layout components should work as expected in IE11, but it's always good to test."),s(m.MDXTag,{name:"p",components:n},"See the ",s(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/philipwalton/flexbugs"}},"Flexbugs")," project for more information."),s(m.MDXTag,{name:"h3",components:n,props:{id:"margins"}},s(m.MDXTag,{name:"a",components:n,parentName:"h3",props:{href:"#margins","aria-hidden":"true"}},s(m.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon icon-link"}})),"Margins"),s(m.MDXTag,{name:"p",components:n},"Using the ",s(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/jxnblk/styled-system"}},"styled-system")," library, the Box and Flex components have several style props for handling margins,\nwhile adhering to the Design System's spacing scale."),s(m.MDXTag,{name:"p",components:n},"To add margin around a component, wrap it with the Box component and use the ",s(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"m")," (margin) prop."),s(m.MDXTag,{name:"pre",components:n},s(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-.jsx",metaString:""}},"<Box m={3}>\n  <Text>Hello</Text>\n</Box>\n")),s(m.MDXTag,{name:"p",components:n},"The number ",s(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"3")," in this example refers to step 3 on the spacing scale (",s(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"theme.space"),").\nThe spacing scale is an array of numbers that are used as pixel values in the Box component."),s(m.MDXTag,{name:"pre",components:n},s(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js",metaString:""}},"// theme.space\n;[0, 4, 8, 16, 32, 64, 128]\n")),s(m.MDXTag,{name:"p",components:n},"To add margin in a particular direction use the ",s(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"mt"),", ",s(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"mr"),", ",s(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"mb"),", or ",s(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ml")," props.\nThese props are shorthands for ",s(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"margin-top"),", ",s(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"margin-right"),", ",s(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"margin-bottom"),", and ",s(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"margin-left")," respectively."),s(m.MDXTag,{name:"pre",components:n},s(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-.jsx",metaString:""}},"<Box\n  mt={3}\n  mb={4}>\n  <Text>Hello</Text>\n</Box>\n")),s(m.MDXTag,{name:"h3",components:n,props:{id:"shorthand-syntax"}},s(m.MDXTag,{name:"a",components:n,parentName:"h3",props:{href:"#shorthand-syntax","aria-hidden":"true"}},s(m.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon icon-link"}})),"Shorthand Syntax"),s(m.MDXTag,{name:"p",components:n},"Much like other libraries, including ",s(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"http://tachyons.io"}},"Tachyons"),", ",s(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://getbootstrap.com/docs/4.0/utilities/spacing/"}},"Bootstrap"),", and ",s(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"http://basscss.com"}},"Basscss"),",\nthe Box component uses a shorthand syntax for margin and padding.\nThis has a little bit of a learning curve and requires some internalization,\nbut due to the heavy use of these properties it can help with development velocity."),s(m.MDXTag,{name:"table",components:n},s(m.MDXTag,{name:"thead",components:n,parentName:"table"},s(m.MDXTag,{name:"tr",components:n,parentName:"thead"},s(m.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Shorthand"),s(m.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Meaning"))),s(m.MDXTag,{name:"tbody",components:n,parentName:"table"},s(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},s(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},s(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"m")),s(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},s(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"margin"))),s(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},s(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},s(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"mt")),s(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},s(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"margin-top"))),s(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},s(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},s(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"mr")),s(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},s(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"margin-right"))),s(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},s(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},s(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"mb")),s(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},s(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"margin-bottom"))),s(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},s(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},s(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"ml")),s(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},s(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"margin-left"))),s(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},s(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},s(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"mx")),s(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},s(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"margin-left")," and ",s(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"margin-right")," (x-axis)")),s(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},s(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},s(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"my")),s(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},s(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"margin-top")," and ",s(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"margin-top")," (y-axis)")),s(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},s(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},s(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"p")),s(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},s(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"padding"))),s(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},s(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},s(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"pt")),s(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},s(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"padding-top"))),s(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},s(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},s(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"pr")),s(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},s(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"padding-right"))),s(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},s(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},s(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"pb")),s(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},s(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"padding-bottom"))),s(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},s(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},s(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"pl")),s(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},s(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"padding-left"))),s(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},s(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},s(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"px")),s(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},s(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"padding-left")," and ",s(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"padding-right")," (x-axis)")),s(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},s(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},s(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"py")),s(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},s(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"padding-top")," and ",s(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"padding-top")," (y-axis)")))),s(m.MDXTag,{name:"h3",components:n,props:{id:"padding"}},s(m.MDXTag,{name:"a",components:n,parentName:"h3",props:{href:"#padding","aria-hidden":"true"}},s(m.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon icon-link"}})),"Padding"),s(m.MDXTag,{name:"p",components:n},"The Box and Flex components can also set padding, using a similar API to the margin props."),s(m.MDXTag,{name:"p",components:n},"To add padding to a Box, use the ",s(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"p")," (padding) prop."),s(m.MDXTag,{name:"pre",components:n},s(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-.jsx",metaString:""}},"<Box p={2}>\n  <Text>Hello</Text>\n</Box>\n")),s(m.MDXTag,{name:"p",components:n},"To add padding in a single direction, use ",s(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"pt"),", ",s(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"pr"),", ",s(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"pb"),", or ",s(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"pl")," props."),s(m.MDXTag,{name:"pre",components:n},s(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-.jsx",metaString:""}},"<Box pt={2} pb={4}>\n  <Text>Hello</Text>\n</Box>\n")),s(m.MDXTag,{name:"h3",components:n,props:{id:"creating-a-responsive-grid-layout"}},s(m.MDXTag,{name:"a",components:n,parentName:"h3",props:{href:"#creating-a-responsive-grid-layout","aria-hidden":"true"}},s(m.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon icon-link"}})),"Creating a responsive grid layout"),s(m.MDXTag,{name:"p",components:n},"The Flex and Box components can be used to create a flexbox-based grid layout,\nusing the same principles used in other grid systems such as ",s(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://getbootstrap.com"}},"Bootstrap"),"."),s(m.MDXTag,{name:"p",components:n},"To start, create a wrapping component with padding."),s(m.MDXTag,{name:"pre",components:n},s(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""}},"<Box p={4} />\n")),s(m.MDXTag,{name:"p",components:n},"Next, add a Flex component with the ",s(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"wrap")," prop to set ",s(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"flex-wrap: wrap"),'.\nThis will work similarly to a "row" in traditional grid systems.'),s(m.MDXTag,{name:"pre",components:n},s(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""}},"<Box p={4}>\n  <Flex wrap />\n</Box>\n")),s(m.MDXTag,{name:"p",components:n},'Next add some Box components that will act as "columns",\nsetting the ',s(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"width")," prop to ",s(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"1")," to make the Boxes fill the full-width of the container\nand stack on top of each other for small viewports."),s(m.MDXTag,{name:"pre",components:n},s(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-.jsx",metaString:""}},"<Box p={4}>\n  <Flex wrap>\n    <Box width={1}>\n      <Text>Hello</Text>\n    </Box>\n    <Box width={1}>\n      <Text>Hello</Text>\n    </Box>\n  </Flex>\n</Box>\n")),s(m.MDXTag,{name:"p",components:n},"Next, use the ",s(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"width")," prop's ",s(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"#responsive-widths"}},"responsive array")," feature\nto change the width of the Boxes at the ",s(m.MDXTag,{name:"em",components:n,parentName:"p"},"small")," breakpoint and up."),s(m.MDXTag,{name:"pre",components:n},s(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-.jsx",metaString:""}},"<Box p={4}>\n  <Flex wrap>\n    <Box width={[ 1, 1/2 ]}>\n      <Text>Hello</Text>\n    </Box>\n    <Box width={[ 1, 1/2 ]}>\n      <Text>Hello</Text>\n    </Box>\n  </Flex>\n</Box>\n")),s(m.MDXTag,{name:"p",components:n},"Here, the array value (",s(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"[ 1, 1/2 ]"),") passed to ",s(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"width")," sets its width to ",s(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"100%")," on small viewports and ",s(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"50%")," on viewports wider than the ",s(m.MDXTag,{name:"em",components:n,parentName:"p"},"small")," breakpoint.\nIf you resize your browser with this example, the Boxes should stack at narrow viewport widths, and appear side-by-side on wider viewports."),s(m.MDXTag,{name:"p",components:n},"Next, to add gutters to the grid, use a combination of padding and negative margins.\nAdd ",s(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"mx={-3}")," to the Flex component to set left and right margins to ",s(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"-theme.space[3]")," (-16px).\nThis is how many CSS grid systems compensate for gutters.\nAdd an equal amount of padding to the Box components (",s(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"px={3}"),") to create gutters between their child components.\nA bottom margin (",s(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"mb={4}"),") can also be added to the Box components to handle spacing when stacked."),s(m.MDXTag,{name:"pre",components:n},s(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-.jsx",metaString:""}},"<Box p={4}>\n  <Flex\n    wrap\n    mx={-3}>\n    <Box\n      width={[ 1, 1/2 ]}\n      px={3}\n      mb={4}>\n      <Text>Hello</Text>\n    </Box>\n    <Box\n      width={[ 1, 1/2 ]}\n      px={3}\n      mb={4}>\n      <Text>Hello</Text>\n    </Box>\n  </Flex>\n</Box>\n")),s(m.MDXTag,{name:"p",components:n},"Note that ",s(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"* { box-sizing: border-box }")," should be set in your application to ensure that the padding and width work as expected in the above example."),s(m.MDXTag,{name:"p",components:n},"Because each Box component in the example above adds left and right padding of ",s(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"px={3}"),",\nthe total amount of space between their children will be double that amount.\nSince the spacing scale is based on powers of two, that amount of space is equal to ",s(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"theme.space[4]"),",\nwhich is why the margin bottom is set to ",s(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"4"),"."),s(m.MDXTag,{name:"h3",components:n,props:{id:"creating-a-two-column-layout"}},s(m.MDXTag,{name:"a",components:n,parentName:"h3",props:{href:"#creating-a-two-column-layout","aria-hidden":"true"}},s(m.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon icon-link"}})),"Creating a two-column layout"),s(m.MDXTag,{name:"p",components:n},"Often pages will have a two column layout, where the left column contains subnavigation or filters and the right column contains the main content for the page.\nUsing some of the same techniques from above, this can be achieved using the Flex and Box components."),s(m.MDXTag,{name:"pre",components:n},s(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""}},"<Flex>\n  <Box px={3} width={1 / 4}>\n    <Sidebar />\n  </Box>\n  <Box px={3} width={3 / 4}>\n    <MainContent />\n  </Box>\n</Flex>\n")),s(m.MDXTag,{name:"h3",components:n,props:{id:"creating-a-navbar"}},s(m.MDXTag,{name:"a",components:n,parentName:"h3",props:{href:"#creating-a-navbar","aria-hidden":"true"}},s(m.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon icon-link"}})),"Creating a navbar"),s(m.MDXTag,{name:"p",components:n},"The Flex and Box components are also well-suited to create things like navbars and toolbars."),s(m.MDXTag,{name:"p",components:n},"Start with a Flex container and set its color to white with a blue background."),s(m.MDXTag,{name:"pre",components:n},s(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""}},"<Flex color='white' bg='blue' />\n")),s(m.MDXTag,{name:"p",components:n},"Next, add an Icon and some placeholder Text components for demonstration.\nIn a real application, these would likely be links and buttons."),s(m.MDXTag,{name:"pre",components:n},s(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-.jsx",metaString:""}},"<Flex\n  color='white'\n  bg='blue'>\n  <Icon\n    name='Hotels'\n    mr={2}\n  />\n  <Text\n    bold\n    mx={2}>\n    Hello\n  </Text>\n  <Text\n    ml='auto'\n    mr={2}>\n    Right Side\n  </Text>\n</Flex>\n")),s(m.MDXTag,{name:"p",components:n},"Note the ",s(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ml='auto'")," on the last item.\nSetting ",s(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"margin: auto")," on a flex item will space it away from its sibling,\nin this case moving the item to the right side of the navbar."),s(m.MDXTag,{name:"p",components:n},"Next, add some padding and use the ",s(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"align")," prop on the parent Flex component to control the layout."),s(m.MDXTag,{name:"pre",components:n},s(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-.jsx",metaString:""}},"<Flex\n  p={2}\n  align='center'\n  color='white'\n  bg='blue'>\n  <Icon\n    name='Hotels'\n    mr={2}\n  />\n  <Text\n    bold\n    mx={2}>\n    Hello\n  </Text>\n  <Text\n    ml='auto'\n    mr={2}>\n    Right Side\n  </Text>\n</Flex>\n")),s(m.MDXTag,{name:"h3",components:n,props:{id:"creating-tiled-layout"}},s(m.MDXTag,{name:"a",components:n,parentName:"h3",props:{href:"#creating-tiled-layout","aria-hidden":"true"}},s(m.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon icon-link"}})),"Creating tiled layout"),s(m.MDXTag,{name:"p",components:n},"Often you'll see cards representing an list of items arranged in a tiled layout.\nUsing the ",s(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"#responsive-widths"}},"responsive width")," feature of the Box component\nand the ",s(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"wrap")," prop on the Flex component, this sort of layout can be achieved with the following:"),s(m.MDXTag,{name:"pre",components:n},s(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""}},"<Flex wrap>\n  {items.map((item) => (\n    <Box key={item.id} p={3} width={[1 / 2, 1 / 3, 1 / 4]}>\n      <ProductCard {...item} />\n    </Box>\n  ))}\n</Flex>\n")),s(m.MDXTag,{name:"h3",components:n,props:{id:"responsive-widths"}},s(m.MDXTag,{name:"a",components:n,parentName:"h3",props:{href:"#responsive-widths","aria-hidden":"true"}},s(m.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon icon-link"}})),"Responsive Widths"),s(m.MDXTag,{name:"p",components:n},"The ",s(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/jxnblk/styled-system"}},"styled-system")," library supports setting responsive widths that change per breakpoint with a mobile-first approach."),s(m.MDXTag,{name:"p",components:n},"The Box component accepts number values to set percentage-based widths.\nAny number from 0\u20131 will be converted to a percentage.\nAny number greater than 1 will be converted to fixed pixel values.\nAnd strings may be passed to use other CSS units, such as ",s(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"em")," or ",s(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"vw"),"."),s(m.MDXTag,{name:"pre",components:n},s(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""}},"// width: 100%\n<Box width={1} />\n\n// width: 50%\n<Box width={1/2} />\n<Box width={0.5} />\n\n// width: 128px\n<Box width={128} />\n\n// width: 2em\n<Box width='2em' />\n")),s(m.MDXTag,{name:"p",components:n},"To set a width that changes at different breakpoints, pass an array to the ",s(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"width")," prop."),s(m.MDXTag,{name:"pre",components:n},s(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""}},"<Box\n  width={[\n    1, // 100% at all viewport widths (xs breakpoint)\n    1 / 2, // 50% from the small (sm) breakpoint and up\n    1 / 3, // 33% from the medium (md) breakpoint and up\n    1 / 4, // 25% from the large (lg) breakpoint and up\n    1 / 8, // 12.5% from the x-large (xl) breakpoint and up\n  ]}\n/>\n")),s(m.MDXTag,{name:"p",components:n},"To skip setting a width at a particular breakpoint, use a ",s(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"null")," value in the array."),s(m.MDXTag,{name:"pre",components:n},s(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""}},"<Box\n  width={[\n    1, // 100% for all viewport widths\n    null, // skip the sm breakpoint (stays 100%)\n    1 / 2, // 50% from the md breakpoint and up\n  ]}\n/>\n")))}},HoBr:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Layout",function(){return a("FhkS")}])}},[["HoBr",0,1,2]]]);