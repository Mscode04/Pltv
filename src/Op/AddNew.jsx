import React, { useState } from 'react';
import './AddNew.css'; // Ensure you have this CSS file for styling

const AddNew = () => {
  const [diseases, setDiseases] = useState(['']);
  const [medications, setMedications] = useState([{ name: '', quantity: '', time: '', food: '' }]);
  const [familyMembers, setFamilyMembers] = useState([{ fullName: '', age: '', education: '', relationship: '', contact: '' }]);
  const [profilePicture, setProfilePicture] = useState(null);
  const [doctorNote, setDoctorNote] = useState('');
  const [route, setRoute] = useState('');




  const handleAddDisease = () => {
    setDiseases([...diseases, '']);
  };

  const handleAddMedication = () => {
    setMedications([...medications, { name: '', quantity: '', time: '', food: '' }]);
  };

  const handleAddFamilyMember = () => {
    setFamilyMembers([...familyMembers, { fullName: '', age: '', education: '', relationship: '', contact: '' }]);
  };

  const handleProfilePictureChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  return (
    <div className="form-container">
      <h2>Add New Patient</h2>
      <form>
        {/* Profile Picture Upload */}
        <div className="form-group">
          <div className="form-field full-width">
            <label htmlFor="profilePicture">Upload Profile Picture:</label>
            <input type="file" id="profilePicture" accept="image/*" onChange={handleProfilePictureChange} />
          </div>
        </div>

        {/* Patient Details */}
        <div className="form-group">
          <div className="form-field">
            <label htmlFor="regNo">Registration No:</label>
            <input type="text" id="regNo" placeholder="Enter Registration No" required />
          </div>
          <div className="form-field">
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" required />
          </div>
        </div>
        <div className="form-group">
          <div className="form-field">
            <label htmlFor="fullName">Full Name:</label>
            <input type="text" id="fullName" placeholder="Enter Full Name" required />
          </div>
          <div className="form-field">
            <label htmlFor="age">Age:</label>
            <input type="number" id="age" placeholder="Enter Age" required />
          </div>
        </div>
        <div className="form-group">
          <div className="form-field">
            <label htmlFor="maritalStatus">Marital Status:</label>
            <select id="maritalStatus">
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="widowed">Widowed</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="spouse">Wife/Husband of:</label>
            <input type="text" id="spouse" placeholder="Enter Spouse Name" />
          </div>
        </div>
        <div className="form-group">
          <div className="form-field">
            <label htmlFor="parent">Father/Mother of:</label>
            <input type="text" id="parent" placeholder="Enter Parent Name" />
          </div>
          <div className="form-field">
            <label htmlFor="gender">Gender:</label>
            <select id="gender" required>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <div className="form-field full-width">
            <label htmlFor="address">Address:</label>
            <textarea id="address" placeholder="Enter Address" required></textarea>
          </div>
        </div>
        <div className="form-group">
          <div className="form-field">
            <label htmlFor="route">Route:</label>
            <textarea id="route" placeholder="Enter Route" value={route} onChange={(e) => setRoute(e.target.value)} />
          </div>
          <div className="form-field">
            <label htmlFor="area">Area:</label>
            <input type="text" id="area" placeholder="Enter Area" />
          </div>
        </div>
        <div className="form-group">
          <div className="form-field">
            <label htmlFor="ward">Ward:</label>
            <input type="text" id="ward" placeholder="Enter Ward" />
          </div>
          <div className="form-field">
            <label htmlFor="panchayath">Panchayath:</label>
            <input type="text" id="panchayath" placeholder="Enter Panchayath" />
          </div>
        </div>
        <div className="form-group">
          <div className="form-field">
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" placeholder="Enter Phone Number" required />
          </div>
        </div>
        <div className="form-group">
          <div className="form-field full-width">
            <label htmlFor="medicalHistory">Medical History:</label>
            <textarea id="medicalHistory" placeholder="Enter Medical History" required></textarea>
          </div>
        </div>

        {/* Diseases Section */}
        <div className="form-group">
          <label>Diseases:</label>
          {diseases.map((disease, index) => (
            <div key={index} className="form-field">
              <select value={disease} onChange={(e) => {
                const newDiseases = [...diseases];
                newDiseases[index] = e.target.value;
                setDiseases(newDiseases);
              }}>
                <option value="">Select Disease</option>
                <option value="diabetes">Diabetes</option>
                <option value="hypertension">Hypertension</option>
                <option value="asthma">Asthma</option>
                <option value="cancer">Cancer</option>
                <option value="other">Other</option>
              </select>
            </div>
          ))}
          <button type="button" className="add-button" onClick={handleAddDisease}>Add More Disease</button>
        </div>

        {/* Medication Section */}
        <div className="form-group">
          <label>Current Medications:</label>
          {medications.map((medication, index) => (
            <div key={index} className="medication-row">
              <input
                type="text"
                placeholder="Name of Medicine"
                value={medication.name}
                onChange={(e) => {
                  const newMedications = [...medications];
                  newMedications[index].name = e.target.value;
                  setMedications(newMedications);
                }}
                required
              />
              <input
                type="number"
                placeholder="Quantity"
                value={medication.quantity}
                onChange={(e) => {
                  const newMedications = [...medications];
                  newMedications[index].quantity = e.target.value;
                  setMedications(newMedications);
                }}
                required
              />
              <input
                type="text"
                placeholder="Time"
                value={medication.time}
                onChange={(e) => {
                  const newMedications = [...medications];
                  newMedications[index].time = e.target.value;
                  setMedications(newMedications);
                }}
                required
              />
              <select
                value={medication.food}
                onChange={(e) => {
                  const newMedications = [...medications];
                  newMedications[index].food = e.target.value;
                  setMedications(newMedications);
                }}
                required
              >
                <option value="before">Before Food</option>
                <option value="after">After Food</option>
                <option value="anytime">Anytime</option>
              </select>
            </div>
          ))}
          <button type="button" className="add-button" onClick={handleAddMedication}>Add More Medicine</button>
        </div>

        {/* Family Details Section */}
        <h3>Family Details:</h3>
        {familyMembers.map((familyMember, index) => (
          <div key={index} className="family-row">
            <input
              type="text"
              placeholder="Full Name"
              value={familyMember.fullName}
              onChange={(e) => {
                const newFamilyMembers = [...familyMembers];
                newFamilyMembers[index].fullName = e.target.value;
                setFamilyMembers(newFamilyMembers);
              }}
              required
            />
            <input
              type="number"
              placeholder="Age"
              value={familyMember.age}
              onChange={(e) => {
                const newFamilyMembers = [...familyMembers];
                newFamilyMembers[index].age = e.target.value;
                setFamilyMembers(newFamilyMembers);
              }}
              required
            />
            <input
              type="text"
              placeholder="Education"
              value={familyMember.education}
              onChange={(e) => {
                const newFamilyMembers = [...familyMembers];
                newFamilyMembers[index].education = e.target.value;
                setFamilyMembers(newFamilyMembers);
              }}
              required
            />
            <input
              type="text"
              placeholder="Relationship"
              value={familyMember.relationship}
              onChange={(e) => {
                const newFamilyMembers = [...familyMembers];
                newFamilyMembers[index].relationship = e.target.value;
                setFamilyMembers(newFamilyMembers);
              }}
              required
            />
            <input
              type="tel"
              placeholder="Contact Number"
              value={familyMember.contact}
              onChange={(e) => {
                const newFamilyMembers = [...familyMembers];
                newFamilyMembers[index].contact = e.target.value;
                setFamilyMembers(newFamilyMembers);
              }}
              required
            />
          </div>
        ))}
        <button type="button" className="add-button" onClick={handleAddFamilyMember}>Add More Family Member</button>

        {/* Doctor's Note Section */}
        <div className="form-group">
          <div className="form-field full-width">
            <label htmlFor="doctorNote">Doctor's Note:</label>
            <textarea id="doctorNote" value={doctorNote} onChange={(e) => setDoctorNote(e.target.value)} placeholder="Enter Doctor's Note"></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default AddNew;
