

const width = window.innerWidth

const getSize = (text1: string, text2: string): string => {
    return (width > 550 ? text1 : text2)
}

export const styles = {
    flexDirection: {
        flexDirection: getSize('column', 'row')
      },
    dataContainer:{
        height: '92vh'
    },
    footerDiv: {
        width: '100%',
        bottom: '0%',
        color: 'white'
    },
    borderBottom: {
        borderBottom: '1px solid grey'
    },
    lottieSize: {
        width: '50%',
        height: '50%'
    },
    containerDiv: {
        width: '100%',
        height: '100%',
        color: 'white'
    },
    innerContainer: {
        width: 'fit-content',
    },
    fontXl: {
        fontSize: getSize('58px', '26px'),
        fontWeight: 500
    },
    fontLg: {
        fontSize: getSize('42px', '24px'),
        fontWeight: '100'
    },
    fontMd: {
        fontSize: getSize('26px', '18px'),
        fontWeight: 100
    },
    button: {
        width: '10vw',
        borderRadius: '0px',
        marginRight: '5px',
        background: 'none',
        fontSize: '2.5vw',
    },
}