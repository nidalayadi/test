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

const servicesData = {
  columns: [
    { name: "id", align: "left" },
    { name: "catégorie", align: "center" },
    { name: "Service", align: "left" },
    { name: "prix", align: "center" },
    { name: "Min", align: "center" },
    { name: "Max", align: "center" },
    { name: "Temps", align: "center" },
    { name: "Description", align: "center" },
    
  ],

  rows: [
    {
      id: <SoftTypography variant="caption" color="secondary" fontWeight="medium">
      6735544672
    </SoftTypography>,
      catégorie: (
        <Icon color="white">
                    facebook
                  </Icon>
      ),
      Service: (
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
      prix: (<SoftTypography
        component="a"
        href="#"
        variant="caption"
        color="secondary"
        fontWeight="medium"
      >
        0.45
      </SoftTypography>),
      Min:(<SoftTypography
        component="a"
        href="#"
        variant="caption"
        color="secondary"
        fontWeight="medium"
      >
        100
      </SoftTypography>),
      Max: (<SoftTypography
        component="a"
        href="#"
        variant="caption"
        color="secondary"
        fontWeight="medium"
      >
        100 K
      </SoftTypography>),
      Temps: (<SoftTypography
        component="a"
        href="#"
        variant="caption"
        color="secondary"
        fontWeight="medium"
      >
        17h : 08min	
      </SoftTypography>),
      Description: (
        <SoftBadge variant="gradient" badgeContent="voir plus" color="dark" size="xs" container />
      ),
    },
    {
        id: <SoftTypography variant="caption" color="secondary" fontWeight="medium">
        6735544672
      </SoftTypography>,
        catégorie: (
          <Icon color="white">
                      facebook
                    </Icon>
        ),
        Service: (
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
        prix: (<SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          0.45
        </SoftTypography>),
        Min:(<SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          100
        </SoftTypography>),
        Max: (<SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          100 K
        </SoftTypography>),
        Temps: (<SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          17h : 08min	
        </SoftTypography>),
        Description: (
          <SoftBadge variant="gradient" badgeContent="voir plus" color="dark" size="xs" container />
        ),
      },
      {
        id: <SoftTypography variant="caption" color="secondary" fontWeight="medium">
        6735544672
      </SoftTypography>,
        catégorie: (
          <Icon color="white">
                      facebook
                    </Icon>
        ),
        Service: (
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
        prix: (<SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          0.45
        </SoftTypography>),
        Min:(<SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          100
        </SoftTypography>),
        Max: (<SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          100 K
        </SoftTypography>),
        Temps: (<SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          17h : 08min	
        </SoftTypography>),
        Description: (
          <SoftBadge variant="gradient" badgeContent="voir plus" color="dark" size="xs" container />
        ),
      },
      {
        id: <SoftTypography variant="caption" color="secondary" fontWeight="medium">
        6735544672
      </SoftTypography>,
        catégorie: (
          <Icon color="white">
                      facebook
                    </Icon>
        ),
        Service: (
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
        prix: (<SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          0.45
        </SoftTypography>),
        Min:(<SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          100
        </SoftTypography>),
        Max: (<SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          100 K
        </SoftTypography>),
        Temps: (<SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          17h : 08min	
        </SoftTypography>),
        Description: (
          <SoftBadge variant="gradient" badgeContent="voir plus" color="dark" size="xs" container />
        ),
      },
      {
        id: <SoftTypography variant="caption" color="secondary" fontWeight="medium">
        6735544672
      </SoftTypography>,
        catégorie: (
          <Icon color="white">
                      facebook
                    </Icon>
        ),
        Service: (
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
        prix: (<SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          0.45
        </SoftTypography>),
        Min:(<SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          100
        </SoftTypography>),
        Max: (<SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          100 K
        </SoftTypography>),
        Temps: (<SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          17h : 08min	
        </SoftTypography>),
        Description: (
          <SoftBadge variant="gradient" badgeContent="voir plus" color="dark" size="xs" container />
        ),
      },
      {
        id: <SoftTypography variant="caption" color="secondary" fontWeight="medium">
        6735544672
      </SoftTypography>,
        catégorie: (
          <Icon color="white">
                      facebook
                    </Icon>
        ),
        Service: (
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
        prix: (<SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          0.45
        </SoftTypography>),
        Min:(<SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          100
        </SoftTypography>),
        Max: (<SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          100 K
        </SoftTypography>),
        Temps: (<SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          17h : 08min	
        </SoftTypography>),
        Description: (
          <SoftBadge variant="gradient" badgeContent="voir plus" color="dark" size="xs" container />
        ),
      },
    
  ],
};

export default servicesData;
