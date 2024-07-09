type BaseProject = {
  image: ImageMetadata;
  website?: string;
  color:
    | "pink"
    | "red"
    | "green"
    | "blue"
    | "yellow"
    | "purple"
    | "indigo"
    | "fuchsia"
    | "teal"
    | "lime"
    | "orange";
};

type ProjectWithManualProps = BaseProject & {
  website: string;
  title: string;
  description: string;
};

type ProjectWithRepo = BaseProject & {
  repoName: string;
  sponsorLink?: string;
};

export type Project = ProjectWithRepo | ProjectWithManualProps;
