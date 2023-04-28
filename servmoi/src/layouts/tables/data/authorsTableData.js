/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import { Icon } from "@mui/material";

// function Author({ image, name, email }) {
//   return (
//     <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
//       <SoftBox mr={2}>
//         <SoftAvatar src={image} alt={name} size="sm" variant="rounded" />
//       </SoftBox>
//       <SoftBox display="flex" flexDirection="column">
//         <SoftTypography variant="button" fontWeight="medium">
//           {name}
//         </SoftTypography>
//         <SoftTypography variant="caption" color="secondary">
//           {email}
//         </SoftTypography>
//       </SoftBox>
//     </SoftBox>
//   );
// }

// function Function({ job, org }) {
//   return (
//     <SoftBox display="flex" flexDirection="column">
//       <SoftTypography variant="caption" fontWeight="medium" color="text">
//         {job}
//       </SoftTypography>
//       <SoftTypography variant="caption" color="secondary">
//         {org}
//       </SoftTypography>
//     </SoftBox>
//   );
// }

const authorsTableData = {
  columns: [
    { name: "id", align: "left" },
    { name: "date", align: "left" },
    { name: "catégorie", align: "center" },
    { name: "service", align: "center" },
    { name: "quantité", align: "center" },
    { name: "lien", align: "center" },
    { name: "début", align: "center" },
    { name: "charge", align: "center" },
    { name: "statut", align: "center" },
    
  ],

  rows: [
    {
      id: <SoftTypography variant="caption" color="secondary" fontWeight="medium">
      6735544672
    </SoftTypography>,
      date: <SoftTypography variant="caption" color="secondary" fontWeight="medium">
      2022-04-11 
      22:52:12
    </SoftTypography>,
      catégorie: (
        <Icon color="white">
                    facebook
                  </Icon>
      ),
      service: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Instagram 
        </SoftTypography>
      ),
      quantité: (<SoftTypography
        component="a"
        href="#"
        variant="caption"
        color="secondary"
        fontWeight="medium"
      >
        1000
      </SoftTypography>),
      lien:(<SoftTypography
        component="a"
        href="#"
        variant="caption"
        color="secondary"
        fontWeight="medium"
      >
        https://instagram.co
      </SoftTypography>),
      début: (<SoftTypography
        component="a"
        href="#"
        variant="caption"
        color="secondary"
        fontWeight="medium"
      >
        10K
      </SoftTypography>),
      charge: (<SoftTypography
        component="a"
        href="#"
        variant="caption"
        color="secondary"
        fontWeight="medium"
      >
        0.5689
      </SoftTypography>),
      statut: (
        <SoftBadge variant="gradient" badgeContent="complète" color="success" size="xs" container />
      ),
    },
    {
      id: <SoftTypography variant="caption" color="secondary" fontWeight="medium">
      6735544672
    </SoftTypography>,
      date: <SoftTypography variant="caption" color="secondary" fontWeight="medium">
      2022-04-11 
      22:52:12
    </SoftTypography>,
      catégorie: (
        <Icon color="white">
                    facebook
                  </Icon>
      ),
      service: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Instagram 
        </SoftTypography>
      ),
      quantité: (<SoftTypography
        component="a"
        href="#"
        variant="caption"
        color="secondary"
        fontWeight="medium"
      >
        1000
      </SoftTypography>),
      lien:(<SoftTypography
        component="a"
        href="#"
        variant="caption"
        color="secondary"
        fontWeight="medium"
      >
        https://instagram.co
      </SoftTypography>),
      début: (<SoftTypography
        component="a"
        href="#"
        variant="caption"
        color="secondary"
        fontWeight="medium"
      >
        10K
      </SoftTypography>),
      charge: (<SoftTypography
        component="a"
        href="#"
        variant="caption"
        color="secondary"
        fontWeight="medium"
      >
        0.5689
      </SoftTypography>),
      statut: (
        <SoftBadge variant="gradient" badgeContent="complète" color="success" size="xs" container />
      ),
    },
    {
      id: <SoftTypography variant="caption" color="secondary" fontWeight="medium">
      6735544672
    </SoftTypography>,
      date: <SoftTypography variant="caption" color="secondary" fontWeight="medium">
      2022-04-11 
      22:52:12
    </SoftTypography>,
      catégorie: (
        <Icon color="white">
                    facebook
                  </Icon>
      ),
      service: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Instagram 
        </SoftTypography>
      ),
      quantité: (<SoftTypography
        component="a"
        href="#"
        variant="caption"
        color="secondary"
        fontWeight="medium"
      >
        1000
      </SoftTypography>),
      lien:(<SoftTypography
        component="a"
        href="#"
        variant="caption"
        color="secondary"
        fontWeight="medium"
      >
        https://instagram.co
      </SoftTypography>),
      début: (<SoftTypography
        component="a"
        href="#"
        variant="caption"
        color="secondary"
        fontWeight="medium"
      >
        10K
      </SoftTypography>),
      charge: (<SoftTypography
        component="a"
        href="#"
        variant="caption"
        color="secondary"
        fontWeight="medium"
      >
        0.5689
      </SoftTypography>),
      statut: (
        <SoftBadge variant="gradient" badgeContent="complète" color="success" size="xs" container />
      ),
    },
    {
      id: <SoftTypography variant="caption" color="secondary" fontWeight="medium">
      6735544672
    </SoftTypography>,
      date: <SoftTypography variant="caption" color="secondary" fontWeight="medium">
      2022-04-11 
      22:52:12
    </SoftTypography>,
      catégorie: (
        <Icon color="white">
                    facebook
                  </Icon>
      ),
      service: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Instagram 
        </SoftTypography>
      ),
      quantité: (<SoftTypography
        component="a"
        href="#"
        variant="caption"
        color="secondary"
        fontWeight="medium"
      >
        1000
      </SoftTypography>),
      lien:(<SoftTypography
        component="a"
        href="#"
        variant="caption"
        color="secondary"
        fontWeight="medium"
      >
        https://instagram.co
      </SoftTypography>),
      début: (<SoftTypography
        component="a"
        href="#"
        variant="caption"
        color="secondary"
        fontWeight="medium"
      >
        10K
      </SoftTypography>),
      charge: (<SoftTypography
        component="a"
        href="#"
        variant="caption"
        color="secondary"
        fontWeight="medium"
      >
        0.5689
      </SoftTypography>),
      statut: (
        <SoftBadge variant="gradient" badgeContent="traitement" color="warning" size="xs" container />
      ),
    },
    {
      id: <SoftTypography variant="caption" color="secondary" fontWeight="medium">
      6735544672
    </SoftTypography>,
      date: <SoftTypography variant="caption" color="secondary" fontWeight="medium">
      2022-04-11 
      22:52:12
    </SoftTypography>,
      catégorie: (
        <Icon color="white">
                    facebook
                  </Icon>
      ),
      service: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Instagram 
        </SoftTypography>
      ),
      quantité: (<SoftTypography
        component="a"
        href="#"
        variant="caption"
        color="secondary"
        fontWeight="medium"
      >
        1000
      </SoftTypography>),
      lien:(<SoftTypography
        component="a"
        href="#"
        variant="caption"
        color="secondary"
        fontWeight="medium"
      >
        https://instagram.co
      </SoftTypography>),
      début: (<SoftTypography
        component="a"
        href="#"
        variant="caption"
        color="secondary"
        fontWeight="medium"
      >
        10K
      </SoftTypography>),
      charge: (<SoftTypography
        component="a"
        href="#"
        variant="caption"
        color="secondary"
        fontWeight="medium"
      >
        0.5689
      </SoftTypography>),
      statut: (
        <SoftBadge variant="gradient" badgeContent="traitement" color="warning" size="xs" container />
      ),
    },
    {
      id: <SoftTypography variant="caption" color="secondary" fontWeight="medium">
      6735544672
    </SoftTypography>,
      date: <SoftTypography variant="caption" color="secondary" fontWeight="medium">
      2022-04-11 
      22:52:12
    </SoftTypography>,
      catégorie: (
        <Icon color="white">
                    facebook
                  </Icon>
      ),
      service: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Instagram 
        </SoftTypography>
      ),
      quantité: (<SoftTypography
        component="a"
        href="#"
        variant="caption"
        color="secondary"
        fontWeight="medium"
      >
        1000
      </SoftTypography>),
      lien:(<SoftTypography
        component="a"
        href="#"
        variant="caption"
        color="secondary"
        fontWeight="medium"
      >
        https://instagram.co
      </SoftTypography>),
      début: (<SoftTypography
        component="a"
        href="#"
        variant="caption"
        color="secondary"
        fontWeight="medium"
      >
        10K
      </SoftTypography>),
      charge: (<SoftTypography
        component="a"
        href="#"
        variant="caption"
        color="secondary"
        fontWeight="medium"
      >
        0.5689
      </SoftTypography>),
      statut: (
        <SoftBadge variant="gradient" badgeContent="rejete" color="error" size="xs" container />
      ),
    },
  ],
};

export default authorsTableData;
