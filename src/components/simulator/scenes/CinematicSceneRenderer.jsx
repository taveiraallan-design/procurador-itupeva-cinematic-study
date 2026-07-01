import PublicOfficeScene from './PublicOfficeScene';
import RequirementsScene from './RequirementsScene';
import CompetenceScene from './CompetenceScene';
import PurposeScene from './PurposeScene';
import FormScene from './FormScene';
import MotiveScene from './MotiveScene';
import ObjectScene from './ObjectScene';
import LegalityScene from './LegalityScene';
import DecisionForkScene from './DecisionForkScene';
import ConvalidationScene from './ConvalidationScene';
import AnnulmentScene from './AnnulmentScene';
import RevocationScene from './RevocationScene';
import ErrorTrapScene from './ErrorTrapScene';
import ConclusionScene from './ConclusionScene';

const sceneMap = {
  'public-office': PublicOfficeScene,
  requirements: RequirementsScene,
  competence: CompetenceScene,
  purpose: PurposeScene,
  form: FormScene,
  motive: MotiveScene,
  object: ObjectScene,
  legality: LegalityScene,
  'decision-fork': DecisionForkScene,
  convalidation: ConvalidationScene,
  annulment: AnnulmentScene,
  merit: RevocationScene,
  revocation: RevocationScene,
  'error-trap': ErrorTrapScene,
  'locked-track': ErrorTrapScene,
  conclusion: ConclusionScene,
};

export default function CinematicSceneRenderer({ step, isExecuting, selectedOption }) {
  const Scene = sceneMap[step.sceneType] || PublicOfficeScene;
  return <Scene step={step} isExecuting={isExecuting} selectedOption={selectedOption} />;
}
