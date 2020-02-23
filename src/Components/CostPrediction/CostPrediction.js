import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row , Col, Card, Form, Button} from 'react-bootstrap';

class CostPrediction extends React.Component{
    constructor(props){
        super(props);
        let _this = this
        this.state = {
            values: {
                formActivity: 0,
                formAlcohol: 0,
                formAuto: 0,
                formBaby: 0,
                formBakery: 0,
                formBeverage: 0,
                formWater: 0,
                formBulk: 0,
                formCanned: 0,
                formCloths: 0,
                formCosmetics: 0,
                formDairy: 0,
                formDeli: 0,
                formDry: 0,
                formElectronics: 0,
                formFloral: 0,
                formFrozen: 0,
                formGift: 0,
                formGrocery: 0,
                formHoliday: 0,
                formHousehold: 0,
                formInStore: 0,
                formInternational: 0,
                formBeef: 0,
                formChicken: 0,
                formMeatOther: 0,
                formPork: 0,
                formPoultry: 0,
                formSausage: 0,
                formTurkey: 0,
                formMedical: 0,
                formMedication: 0,
                formMisc: 0,
                formOutdoor: 0,
                formPersonal: 0,
                formPet: 0,
                formProduce: 0,
                formSeafood: 0,
                formSeasonal: 0,
                formGridCity: 0,
                formTobacco: 0,
                formToys: 0,
            }
        }
    };


    render(){
        return(
            <Container>
                <Row>
                    <Col sm={8}>
                        <Card body>
                            <Card.Title>Prediction Form</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">With this form you can predict potential spending on future products.</Card.Subtitle>
                            <Card.Body>
                                <Form>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formActivity">
                                <Form.Label>Activity</Form.Label>
                                    <Form.Control
                                        value={this.state.values.formActivity}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formAlcohol">
                                <Form.Label>Alcohol</Form.Label>
                                    <Form.Control
                                        value={this.state.values.formAlcohol}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formAuto">
                                <Form.Label>Auto</Form.Label>
                                <Form.Control
                                        value={this.state.values.formAuto}
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formBaby">
                                <Form.Label>Baby</Form.Label>
                                <Form.Control
                                        value={this.state.values.formBaby}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formBakery">
                                <Form.Label>Bakery</Form.Label>
                                <Form.Control
                                        value={this.state.values.formBakery}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formBeverage">
                                <Form.Label>Beverage (Not Water)</Form.Label>
                                <Form.Control
                                        value={this.state.values.formBeverage}
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formWater">
                                <Form.Label>Water</Form.Label>
                                <Form.Control
                                        value={this.state.values.formWater}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formBulk">
                                <Form.Label>Bulk Products</Form.Label>
                                <Form.Control
                                        value={this.state.values.formBulk}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formCanned">
                                <Form.Label>Canned Goods</Form.Label>
                                <Form.Control
                                        value={this.state.values.formCanned}
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formCloths">
                                <Form.Label>Cloths</Form.Label>
                                <Form.Control
                                        value={this.state.values.formCloths}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formCosmetics">
                                <Form.Label>Cosmetics</Form.Label>
                                <Form.Control
                                        value={this.state.values.formCosmetics}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formDairy">
                                <Form.Label>Dairy</Form.Label>
                                <Form.Control
                                        value={this.state.values.formDairy}
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formDeli">
                                <Form.Label>Deli</Form.Label>
                                <Form.Control
                                        value={this.state.values.formDeli}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formDry">
                                <Form.Label>Dry Good</Form.Label>
                                <Form.Control
                                        value={this.state.values.formDry}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formElectronics">
                                <Form.Label>Electronics</Form.Label>
                                <Form.Control
                                        value={this.state.values.formElectronics}
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formFloral">
                                <Form.Label>Floral</Form.Label>
                                <Form.Control
                                        value={this.state.values.formFloral}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formFrozen">
                                <Form.Label>Frozen Food</Form.Label>
                                <Form.Control
                                        value={this.state.values.formFrozen}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGift">
                                <Form.Label>Gift</Form.Label>
                                <Form.Control
                                        value={this.state.values.formGift}
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGrocery">
                                <Form.Label>Grocery Staple</Form.Label>
                                <Form.Control
                                        value={this.state.values.formGrocery}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formHoliday">
                                <Form.Label>Holiday</Form.Label>
                                <Form.Control
                                        value={this.state.values.formHoliday}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formHousehold">
                                <Form.Label>Household</Form.Label>
                                <Form.Control
                                        value={this.state.values.formHousehold}
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formInStore">
                                <Form.Label>In Store Food Service</Form.Label>
                                <Form.Control
                                        value={this.state.values.formInStore}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formInternational">
                                <Form.Label>International Food</Form.Label>
                                <Form.Control
                                        value={this.state.values.formInternational}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formBeef">
                                <Form.Label>Meat (Beef)</Form.Label>
                                <Form.Control
                                        value={this.state.values.formBeef}
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formChicken">
                                <Form.Label>Meat (Chicken)</Form.Label>
                                <Form.Control
                                        value={this.state.values.formChicken}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formMeatOther">
                                <Form.Label>Meat (Other)</Form.Label>
                                <Form.Control
                                        value={this.state.values.formMeatOther}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formPork">
                                <Form.Label>Meath (Pork)</Form.Label>
                                <Form.Control
                                        value={this.state.values.formPork}
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formPoultry">
                                <Form.Label>Meat (Poultry)</Form.Label>
                                <Form.Control
                                        value={this.state.values.formPoultry}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formSausage">
                                <Form.Label>Meat (Sausage)</Form.Label>
                                <Form.Control
                                        value={this.state.values.formSausage}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formTurkey">
                                <Form.Label>Meat (Turkey)</Form.Label>
                                <Form.Control
                                        value={this.state.values.formTurkey}
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formMedical">
                                <Form.Label>Medical Supplies</Form.Label>
                                <Form.Control
                                        value={this.state.values.formMedical}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formMedication">
                                <Form.Label>Medication</Form.Label>
                                <Form.Control
                                        value={this.state.values.formMedication}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formMisc">
                                <Form.Label>Misc</Form.Label>
                                <Form.Control
                                        value={this.state.values.formMisc}
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formOutdoor">
                                <Form.Label>Outdoor</Form.Label>
                                <Form.Control
                                        value={this.state.values.formOutdoor}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formPersonal">
                                <Form.Label>Personal Care</Form.Label>
                                <Form.Control
                                        value={this.state.values.formPersonal}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formPet">
                                <Form.Label>Pet</Form.Label>
                                <Form.Control
                                        value={this.state.values.formPet}
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formProduce">
                                <Form.Label>Produce</Form.Label>
                                <Form.Control
                                        value={this.state.values.formProduce}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formSeafood">
                                <Form.Label>Seafood</Form.Label>
                                <Form.Control
                                        value={this.state.values.formSeafood}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formSeasonal">
                                <Form.Label>Seasonal Products</Form.Label>
                                <Form.Control
                                        value={this.state.values.formSeasonal}
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Specialty Food</Form.Label>
                                <Form.Control
                                        value={this.state.values.formGridCity}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formTobacco">
                                <Form.Label>Tobacco Products</Form.Label>
                                <Form.Control
                                        value={this.state.values.formTobacco}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formToys">
                                <Form.Label>Toys</Form.Label>
                                <Form.Control
                                        value={this.state.values.formToys}
                                    />
                                </Form.Group>
                            </Form.Row>
                            </Form>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Card body>
                            <Card.Title>Potential Spending</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default CostPrediction
