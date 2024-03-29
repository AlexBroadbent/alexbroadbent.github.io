import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'
import { ButtonLink, ListSectionCard, Paragraph } from '../../component'

export const BlogItem = ({ title, created, children, link }) => (
  <ListSectionCard
    title={title}
    actions={[
      <ButtonLink key={0} href={link}>
        Read the full post on Medium
      </ButtonLink>
    ]}
  >
    <Typography variant="subtitle2" sx={{ py: 1, fontWeight: 'bold' }}>
      {created}
    </Typography>
    <Paragraph>{children}</Paragraph>
  </ListSectionCard>
)

BlogItem.propTypes = {
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}
