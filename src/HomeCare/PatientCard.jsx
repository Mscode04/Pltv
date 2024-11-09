import React from "react";

import "./PatientCard.css";
import { Table, Card, Button } from "react-bootstrap";

const PatientCard = () => {
  return (
    <Card className="patient-card">
      <Card.Header className="patient-header">Patient Card</Card.Header>
      
      <Card.Body>
        <section className="patient-details">
        
          
          <p>
            <strong>Register Number:</strong> 12345
          </p>
          <p>
            <strong>Date:</strong> 2024-11-02
          </p>
          <p>
            <strong>Full Name:</strong> John Doe
          </p>
          <p>
            <strong>Age:</strong> 65
          </p>
          <p>
            <strong>Address:</strong> 123 Main St, Makkaraparamba
          </p>
          <p>
            <strong>Phone:</strong> 9876543210
          </p>
          <p>
            <strong>Email:</strong> johndoe@example.com
          </p>
          <p>
            <strong>Panchayat:</strong> Ward 1
          </p>
          <p>
            <strong>Neighbor Name:</strong> Jane Smith
          </p>
          <p>
            <strong>Neighbor Phone:</strong> 9876543211
          </p>

       
          <Table striped bordered className="family-table">
            <thead>
            <h2>Family Details</h2>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Relation</th>
                <th>Education</th>
                <th>Job</th>
                <th>Marital Status</th>
                <th>Disabilities</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-row">
                <td>Jane Doe</td>
                <td>40</td>
                <td>Sister</td>
                <td>Graduate</td>
                <td>Teacher</td>
                <td>Married</td>
                <td>None</td>
              </tr>
              <tr className="table-row">
                <td>Jane Doe</td>
                <td>40</td>
                <td>Sister</td>
                <td>Graduate</td>
                <td>Teacher</td>
                <td>Married</td>
                <td>None</td>
              </tr>
            </tbody>
          </Table>
          <Table striped bordered className="family-table">
            <thead>
              <h2>Welfare Schemes</h2>
              <tr>
                <th>Number</th>
                <th>Welfare Schemes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-row">
                <td>1</td>
                <td>Welfare Schemes 1</td>
              </tr>
              <tr className="table-row">
                <td>2</td>
                <td>Welfare Schemes 2</td>
              </tr>
              <tr className="table-row">
                <td>3</td>
                <td>Ration </td>
              </tr>
            </tbody>
          </Table>
          <Table striped bordered className="family-table">
            <thead>
              <h2>Medical History</h2>
              <tr>
                <th>History</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-row">
                <td>The patient has a history of hypertension and diabetes.</td>
              </tr>
            </tbody>
          </Table>
          <Table striped bordered className="family-table">
            <thead>
              <h2>Medical Conditions</h2>
              <tr>
                <th>Conditions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-row">
                <td>
                  The patient currently suffers from arthritis and requires
                  regular monitoring.
                </td>
              </tr>
            </tbody>
          </Table>
          <h5 className="detail-heading">Medicines</h5>
          <Table striped bordered className="medicine-table">
            <thead>
              <tr>
                <th>Medicine</th>
                <th>Qty</th>
                <th>Time</th>
                <th>Before/After Food</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-row">
                <td>ACETAZOLAMIDE 250 MG</td>
                <td>1</td>
                <td>Morning-Afternoon-Night</td>
                <td>After</td>
              </tr>
              <tr className="table-row">
                <td>ALDACTONE 250 MG</td>
                <td>2</td>
                <td>Morning-Night</td>
                <td>Before</td>
              </tr>
              <tr className="table-row">
                <td>ALDACTONE 250 MG</td>
                <td>2</td>
                <td>Morning-Night</td>
                <td>Before</td>
              </tr>
            </tbody>
          </Table>
        </section>
        <section>
        <div className="category-section">
      
        <select className="category-select">
          <option value="">Nurse</option>
          <option value="Nurse1">Nurse 1</option>
          <option value="Nurse2">Nurse 2</option>
        </select>
        <input type="date" className="category-select" placeholder="Start Date" />
        <input type="date" className="category-select" placeholder="End Date" />
        <select className="category-select">
          <option value="">Category</option>
          <option value="Category1">NHC</option>
          <option value="Category2">DHC</option>
        </select>
        <select className="category-select">
          <option value="">Doctor</option>
          <option value="Doctor1">Doctor 1</option>
          <option value="Doctor2">Doctor 2</option>
        </select>
        <button className="filter-button">Filter</button>
        <button className="filter-button print">Print</button>
      </div>
        </section>
        <section className="dhc-nhc">
          <h5 className="detail-heading">Report-1</h5>
          <Table striped bordered className="details-table">
            <tbody>
              <tr>
                <th>Date</th>
                <td>2024-11-02</td>
              </tr>
              <tr>
                <th>Thing to do</th>
                <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ut provident tempora dolore velit, ipsum nam sed minima temporibus nemo voluptatibus obcaecati. Sit ad ex, laborum maxime adipisci provident quo!</td>
              </tr>
              <tr>
                <th>Team</th>
                <td>Dr. Smith, Nurse Lee, Therapist Jo</td>
              </tr>
              <tr>
                <th>First Impression</th>
                <td>Patient is stable and responsive.</td>
              </tr>
              <tr>
                <th>Patient Awareness</th>
                <td>Know</td>
              </tr>
              <tr>
                <th>Type</th>
                <td>NHC</td>
              </tr>
              <tr>
                <th>Doctor's Note</th>
                <td>
                  Requires regular physiotherapy Requires regular physiotherapy
                  Requires regular physiotherapyRequires regular physiotherapy
                  Requires regular physiotherapy
                </td>
              </tr>
              <tr>
                <th>Basic Matters</th>
                <td>
                  `` Food: Good | Sleep: Average | Pee: Good | Pop: Average |
                  Bath: Good
                </td>
              </tr>
              <tr>
                <th>Body Status</th>
                <td>
                  Skin: Normal | Hair: Clean | Nails: Clean | Mouth: Normal |
                  Pressure Area: Clean
                </td>
              </tr>
              <tr>
                <th>Home Care Plans</th>
                <td>1 Day per week</td>
              </tr>
              <tr>
                <th>Environment</th>
                <td>Room: Clean | House: Normal | Surroundings: Clean</td>
              </tr>
              <tr>
                <th>Vital Signs</th>
                <td>
                  <Table striped bordered className="vital-signs-table">
                    <thead>
                      <tr>
                        <th>Temperature</th>
                        <th>Pulse</th>
                        <th>Blood Pressure</th>
                        <th>Respiratory Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="table-row">
                        <td>Normal</td>
                        <td>72</td>
                        <td>120/80</td>
                        <td>18</td>
                      </tr>
                    </tbody>
                  </Table>
                </td>
              </tr>
              <tr>
                <th>Medical Condition</th>
                <td>Currently stable, no urgent medical updates needed.</td>
              </tr>
              <tr>
                <th>Medicine Additional</th>
                <td>
                  {" "}
                  <Table striped bordered className="medicine-table">
                    <thead>
                      <tr>
                        <th>Medicine</th>
                        <th>Qty</th>
                        <th>Time</th>
                        <th>Before/After Food</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="table-row">
                        <td>ACETAZOLAMIDE 250 MG</td>
                        <td>1</td>
                        <td>Morning-Afternoon-Night</td>
                        <td>After</td>
                      </tr>
                      <tr className="table-row">
                        <td>ALDACTONE 250 MG</td>
                        <td>2</td>
                        <td>Morning-Night</td>
                        <td>Before</td>
                      </tr>
                      <tr className="table-row">
                        <td>ALDACTONE 250 MG</td>
                        <td>2</td>
                        <td>Morning-Night</td>
                        <td>Before</td>
                      </tr>
                    </tbody>
                  </Table>
                </td>
              </tr>
            </tbody>
          </Table>
        </section>


        <section className="dhc-nhc mt-4">
          <h5 className="detail-heading">Report-2</h5>
          <Table striped bordered className="details-table">
            <tbody>
              <tr>
                <th>Date</th>
                <td>2024-11-02</td>
              </tr>
              <tr>
                <th>Thing to do</th>
                <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ut provident tempora dolore velit, ipsum nam sed minima temporibus nemo voluptatibus obcaecati. Sit ad ex, laborum maxime adipisci provident quo!</td>
              </tr>
              <tr>
                <th>Team</th>
                <td>Dr. Smith, Nurse Lee, Therapist Jo</td>
              </tr>
              <tr>
                <th>First Impression</th>
                <td>Patient is stable and responsive.</td>
              </tr>
              <tr>
                <th>Patient Awareness</th>
                <td>Know</td>
              </tr>
              <tr>
                <th>Type</th>
                <td>NHC</td>
              </tr>
              <tr>
                <th>Doctor's Note</th>
                <td>
                  Requires regular physiotherapy Requires regular physiotherapy
                  Requires regular physiotherapyRequires regular physiotherapy
                  Requires regular physiotherapy
                </td>
              </tr>
              <tr>
                <th>Basic Matters</th>
                <td>
                  `` Food: Good | Sleep: Average | Pee: Good | Pop: Average |
                  Bath: Good
                </td>
              </tr>
              <tr>
                <th>Body Status</th>
                <td>
                  Skin: Normal | Hair: Clean | Nails: Clean | Mouth: Normal |
                  Pressure Area: Clean
                </td>
              </tr>
              <tr>
                <th>Home Care Plans</th>
                <td>1 Day per week</td>
              </tr>
              <tr>
                <th>Environment</th>
                <td>Room: Clean | House: Normal | Surroundings: Clean</td>
              </tr>
              <tr>
                <th>Vital Signs</th>
                <td>
                  <Table striped bordered className="vital-signs-table">
                    <thead>
                      <tr>
                        <th>Temperature</th>
                        <th>Pulse</th>
                        <th>Blood Pressure</th>
                        <th>Respiratory Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="table-row">
                        <td>Normal</td>
                        <td>72</td>
                        <td>120/80</td>
                        <td>18</td>
                      </tr>
                    </tbody>
                  </Table>
                </td>
              </tr>
              <tr>
                <th>Medical Condition</th>
                <td>Currently stable, no urgent medical updates needed.</td>
              </tr>
              <tr>
                <th>Medicine Additional</th>
                <td>
                  {" "}
                  <Table striped bordered className="medicine-table">
                    <thead>
                      <tr>
                        <th>Medicine</th>
                        <th>Qty</th>
                        <th>Time</th>
                        <th>Before/After Food</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="table-row">
                        <td>ACETAZOLAMIDE 250 MG</td>
                        <td>1</td>
                        <td>Morning-Afternoon-Night</td>
                        <td>After</td>
                      </tr>
                      <tr className="table-row">
                        <td>ALDACTONE 250 MG</td>
                        <td>2</td>
                        <td>Morning-Night</td>
                        <td>Before</td>
                      </tr>
                      <tr className="table-row">
                        <td>ALDACTONE 250 MG</td>
                        <td>2</td>
                        <td>Morning-Night</td>
                        <td>Before</td>
                      </tr>
                    </tbody>
                  </Table>
                </td>
              </tr>
            </tbody>
          </Table>
        </section>

        <Button variant="outline-light" className="mt-3">
          Download Report
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PatientCard;
