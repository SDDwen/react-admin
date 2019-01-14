import React, { Fragment } from 'react'
import { Row, Col } from 'antd'

import NavLeft from './components/NavLeft'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => (
  <Fragment>
    <Row>
      <Col span={3}>
        <NavLeft />
      </Col>
      <Col span={21}>
        <Header />
        <Row />
        <Footer />
      </Col>
    </Row>
  </Fragment>
)

export default App
